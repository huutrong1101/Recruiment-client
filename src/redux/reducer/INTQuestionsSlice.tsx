import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/Status";
import { getLocalToken } from "../../utils/localToken";
import axiosInstance from "../../utils/AxiosInstance";
import { toast } from "react-toastify";

interface INTQuestionsState {
  selectedQuestions: { [key: string]: any[] };
  assignedQuestions: any[];
  assignedQuestionsStatus: STATUS;
  searchQuestionsStatus: STATUS;
  searchQuestions: any[];
}

const initialState: INTQuestionsState = {
  selectedQuestions: {},
  assignedQuestions: [],
  assignedQuestionsStatus: STATUS.IDLE,
  searchQuestionsStatus: STATUS.IDLE,
  searchQuestions: [],
};

const INTQuestionsSlice = createSlice({
  name: "INTQuestions",
  initialState,
  reducers: {
    setEmptySelectedQuestions(state, action: PayloadAction<{ ID: string }>) {
      state.selectedQuestions[action.payload.ID] = [];
    },
    selectQuestions(
      state,
      action: PayloadAction<{ ID: string; question: any }>,
    ) {
      const { ID: interviewID, question } = action.payload;
      if (interviewID in state.selectedQuestions) {
        const isQuestionExist = state.selectedQuestions[interviewID].find(
          (item) => item.questionId === question.questionId,
        );
        if (!isQuestionExist)
          state.selectedQuestions[interviewID].push(question);
      } else {
        state.selectedQuestions[interviewID] = [question];
      }
    },
    removeQuestions(
      state,
      action: PayloadAction<{ ID: string; question: any }>,
    ) {
      const { ID: interviewID, question } = action.payload;
      state.selectedQuestions[interviewID] = state.selectedQuestions[
        interviewID
      ].filter((item) => item.questionId !== question.questionId);
    },
    setScore(state, action: PayloadAction<{ questionId: any; value: any }>) {
      const { questionId, value } = action.payload;
      const index = state.assignedQuestions.findIndex(
        (item) => item.questionId === questionId,
      );
      if (index != -1) state.assignedQuestions[index].score = value;
    },
    setNote(state, action: PayloadAction<{ questionId: any; value: any }>) {
      const { questionId, value } = action.payload;
      const index = state.assignedQuestions.findIndex(
        (item) => item.questionId === questionId,
      );
      if (index != -1) state.assignedQuestions[index].note = value;
    },
    setAssignedQuestion(state, action) {
      state.assignedQuestions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchINTQuestionData.pending, (state) => {
        state.searchQuestionsStatus = STATUS.LOADING;
      })
      .addCase(fetchINTQuestionData.fulfilled, (state, action) => {
        state.searchQuestions = action.payload.content;
        state.searchQuestionsStatus = STATUS.IDLE;
      })
      .addCase(fetchINTQuestionData.rejected, (state) => {
        state.searchQuestionsStatus = STATUS.IDLE;
        state.searchQuestions = [];
      })

      .addCase(fetchINTAssignedQuestions.pending, (state) => {
        state.assignedQuestionsStatus = STATUS.LOADING;
      })
      .addCase(fetchINTAssignedQuestions.fulfilled, (state, action) => {
        state.assignedQuestions = action.payload.content;
        state.assignedQuestionsStatus = STATUS.IDLE;
      })
      .addCase(fetchINTAssignedQuestions.rejected, (state, action) => {
        toast.error(`${action.error.message}`);
        state.assignedQuestionsStatus = STATUS.ERROR;
      })

      .addCase(assignQuestionForInterview.fulfilled, (state, action) => {
        toast.success(`${action.payload.message}`);
      })
      .addCase(assignQuestionForInterview.rejected, (state, action) => {
        toast.error(`${action.error.message}`);
        state.assignedQuestionsStatus = STATUS.ERROR;
      })

      .addCase(deleteQuestionOfInterview.fulfilled, (state, action) => {
        toast.success(`${action.payload.message}`);
      })
      .addCase(deleteQuestionOfInterview.rejected, (state, action) => {
        toast.error(`${action.error.message}`);
      })

      .addCase(markScore.fulfilled, (state, action) => {
        toast.success(`${action.payload.message}`);
      })
      .addCase(markScore.rejected, (state, action) => {
        toast.error(`${action.error.message}`);
      });
  },
});

export default INTQuestionsSlice.reducer;
export const {
  selectQuestions,
  removeQuestions,
  setEmptySelectedQuestions,
  setScore,
  setNote,
} = INTQuestionsSlice.actions;

export const fetchINTQuestionData = createAsyncThunk(
  "INTQuestions/fetchINTQuestionData",
  async (query: string = "") => {
    const response = await axiosInstance.get(`/interviewer/question${query}`);
    return response.data.result;
  },
);

export const fetchINTAssignedQuestions = createAsyncThunk(
  "INTQuestions/fetchINTAssignQuestions",
  async (id: any) => {
    const response = await axiosInstance.get(
      `/interviewer/interview/${id}/questions`,
    );
    return response.data.result;
  },
);

export const deleteQuestionOfInterview = createAsyncThunk(
  "INTQuestions/deleteQuestionOfInterview",
  async (data: any) => {
    const { ID, question } = data;
    console.log(ID, question.questionId);
    const response = await axiosInstance.delete(
      `/interviewer/interview/${ID}/questions/question/${question.questionId}`,
    );
    return response.data;
  },
);

export const assignQuestionForInterview = createAsyncThunk(
  "INTQuestions/assignQuestionForInterview",
  async (data: any) => {
    const { ID, selectedQuestions } = data;
    const assignQuestions: {
      questionId: string;
      score: number;
      note: string;
    }[] = selectedQuestions[ID].map((item: any) => ({
      questionId: item.questionId,
      score: "",
      note: "",
    }));
    const response = await axiosInstance.post(
      `/interviewer/interview/${ID}/questions`,
      assignQuestions,
    );
    return response.data;
  },
);

export const markScore = createAsyncThunk(
  "INTQuestions/markScore",
  async (data: any) => {
    const { ID, assignedQuestions } = data;
    const response1 = await axiosInstance.put(
      `/interviewer/interview/${ID}/questions`,
      assignedQuestions,
    );
    const response2 = await axiosInstance.put(
      `/interviewer/interview/${ID}/totalScore`,
    );
    return response2.data;
  },
);
