import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/AxiosInstance";
import { STATUS } from "../../utils/Status";

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
      .addCase(fetchINTQuestionData.rejected, (state, action) => {
        toast.error(`${action.error.message}`);
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
        if (action.error.message === "Request failed with status code 500") {
          state.assignedQuestionsStatus = STATUS.ERROR500;
        } else if (
          action.error.message === "Request failed with status code 404"
        ) {
          state.assignedQuestionsStatus = STATUS.ERROR404;
        } else {
          toast.error(`${action.error.message}`);
          state.assignedQuestionsStatus = STATUS.ERROR;
        }
      })

      .addCase(assignQuestionForInterview.pending, (state, action) => {
        state.assignedQuestionsStatus = STATUS.LOADING;
      })
      .addCase(assignQuestionForInterview.fulfilled, (state, action) => {
        toast.success(`${action.payload.message}`);
        state.assignedQuestionsStatus = STATUS.IDLE;
      })
      .addCase(assignQuestionForInterview.rejected, (state, action) => {
        if (action.error.message === "Request failed with status code 409") {
          toast.warning(`Questions has been assigned for the interview`, {
            style: {
              background: "#FFD700",
              color: "#000",
            },
          });
        } else {
          toast.info(`${action.error.message}`, {
            style: {
              background: "#007bff",
              color: "#fff",
            },
          });
        }
        state.assignedQuestionsStatus = STATUS.IDLE;
      })

      .addCase(deleteQuestionOfInterview.pending, (state, action) => {
        state.assignedQuestionsStatus = STATUS.LOADING;
      })
      .addCase(deleteQuestionOfInterview.fulfilled, (state, action) => {
        toast.success(`${action.payload.message}`);
        state.assignedQuestionsStatus = STATUS.IDLE;
      })
      .addCase(deleteQuestionOfInterview.rejected, (state, action) => {
        toast.error(`${action.error.message}`);
        state.assignedQuestionsStatus = STATUS.IDLE;
      })

      .addCase(markScore.pending, (state, action) => {
        toast.info(`Loading.....`, {
          autoClose: false,
          style: {
            background: "#007bff",
            color: "#fff",
          },
        });
      })
      .addCase(markScore.fulfilled, (state, action) => {
        toast.dismiss();
        toast.success(`Mark score successfully`);
      })
      .addCase(markScore.rejected, (state, action) => {
        toast.dismiss();
        if (action.error.message === "Request failed with status code 422") {
          toast.warning(`Entry point must be in the range 0-10`, {
            style: {
              background: "#FFD700",
              color: "#000",
            },
          });
        } else if (
          action.error.message === "Request failed with status code 500"
        ) {
          toast.warning(`Scores must be entered for all questions`, {
            style: {
              background: "#FFD700",
              color: "#000",
            },
          });
        } else {
          toast.error(`${action.error.message}`);
        }
      })

      .addCase(addQuestionToRepo.pending, (state, action) => {
        toast.info(`Loading.....`, {
          autoClose: false,
          style: {
            background: "#007bff",
            color: "#fff",
          },
        });
      })
      .addCase(addQuestionToRepo.fulfilled, (state, action) => {
        toast.dismiss();
        toast.success(`Assign question successfully`);
      })
      .addCase(addQuestionToRepo.rejected, (state, action) => {
        toast.dismiss();
        if (action.error.message === "Request failed with status code 409") {
          toast.warning(`Question already exists`, {
            style: {
              background: "#FFD700",
              color: "#000",
            },
          });
        } else {
          toast.error(action.error.message);
        }
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
    const response = await axiosInstance.get(
      `/interviewer/questionList${query}`,
    );
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
    }[] = selectedQuestions[ID]?.map((item: any) => ({
      questionId: item.questionId,
      score: "",
      note: "",
    }));
    if (!selectedQuestions[ID] || selectedQuestions[ID].length === 0) {
      throw "All questions have been saved";
    }
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

export const addQuestionToRepo = createAsyncThunk(
  "INTQuestions/addQuestionToRepo",
  async (data: any) => {
    const { ID, contentQ, noteQ, typeQ, skillQ } = data;
    const question: {
      content: string;
      note: string;
      typeQuestion: string;
      skillId: string;
    } = {
      content: contentQ,
      note: noteQ,
      typeQuestion: typeQ,
      skillId: skillQ,
    };
    const response1 = await axiosInstance.post(
      `/interviewer/question`,
      question,
    );

    const assignQuestions: { questionId: any; score: any; note: any }[] = [
      {
        questionId: response1.data.result.questionId,
        score: "",
        note: "",
      },
    ];
    const response2 = await axiosInstance.post(
      `/interviewer/interview/${ID}/questions`,
      assignQuestions,
    );
    return response2.data;
  },
);
