import {
  TrashIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useParams, useNavigate, Link } from "react-router-dom";

import { fetchINTCandidatesByID } from "../../redux/reducer/INTCandidatesSlice";
import {
  fetchINTAssignedQuestions,
  deleteQuestionOfInterview,
  addQuestionToRepo,
  setScore,
  setNote,
  markScore,
} from "../../redux/reducer/INTQuestionsSlice";

import {
  checkCompleteMarkScore,
  truncatedString,
  isDateReached,
} from "../Interviewer/InterviewRecent/Detail/InterviewDetail";
import {
  fetchSkills,
  fetchTypes,
} from "../../redux/reducer/INTInterviewsSlice";
import Modal from "react-modal";
import { TYPE_alter } from "../../utils/Localization";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import { STATUS } from "../../utils/Status";
import Error from "../Interviewer/Error/Error";

export default function ScorePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ID: string = id!;

  const [clickedQuestion, setClickedQuestion] = useState<any>();

  const { INTSingleCandidate, INTSingleCandidateStatus } = useAppSelector(
    (state: any) => state.INTCandidates,
  );
  const { skills, types } = useAppSelector((state: any) => state.INTInterviews);
  const { assignedQuestions, assignedQuestionsStatus } = useAppSelector(
    (state: any) => state.INTQuestions,
  );
  const dispatch = useAppDispatch();

  const [contentQ, setContentQ] = useState("");
  const [noteQ, setNoteQ] = useState("");
  const [typeQ, setTypeQ] = useState("");
  const [skillQ, setSkillQ] = useState("");

  const handleChangeContentQ = (event: any) => {
    setContentQ(event.target.value);
  };
  const handleChangeNoteQ = (event: any) => {
    setNoteQ(event.target.value);
  };
  const handleChangeTypeQ = (event: any) => {
    setTypeQ(event.target.value);
  };
  const handleChangeSkillQ = (event: any) => {
    setSkillQ(event.target.value);
  };
  const handleSubmitQ = async (event: any) => {
    event.preventDefault();
    await dispatch(addQuestionToRepo({ ID, contentQ, noteQ, typeQ, skillQ }));
    dispatch(fetchINTAssignedQuestions(id));
  };

  const handleDelete = async (question: any) => {
    await dispatch(deleteQuestionOfInterview({ ID, question }));
    dispatch(fetchINTAssignedQuestions(id));
  };
  const handleClick = (question: any) => {
    setClickedQuestion(question);
    if (question.score) setScoreForm(question.score);
    else setScoreForm("");
    if (question.note) setNoteForm(question.note);
    else setNoteForm("");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scoreForm, setScoreForm] = useState("");
  const [noteForm, setNoteForm] = useState("");
  const handleChangeScore = (questionId: any, event: any) => {
    const value = event.target.value;
    setScoreForm(value);
    dispatch(setScore({ questionId, value }));
  };
  const handleChangeNote = (questionId: any, event: any) => {
    const value = event.target.value;
    setNoteForm(value);
    dispatch(setNote({ questionId, value }));
  };

  const handleMarkScore = async () => {
    await dispatch(markScore({ ID, assignedQuestions }));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [isFetch, setIsFetch] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchINTAssignedQuestions(id));
      await dispatch(fetchINTCandidatesByID(id));
      setIsFetch(true);
    };
    fetchData();
    dispatch(fetchSkills());
    dispatch(fetchTypes());
  }, []);

  useEffect(() => {
    if (
      checkCompleteMarkScore(assignedQuestions) ||
      !isDateReached(INTSingleCandidate?.date)
    ) {
      navigate(`/interviewer/interview-recent/${ID}`);
    }
  }, [isFetch]);

  if (
    INTSingleCandidateStatus === STATUS.IDLE &&
    assignedQuestionsStatus === STATUS.IDLE
  ) {
    return (
      <div>
        <div className="flex mt-8 min-h-[450px]">
          <div className="w-5/12 border-2 shadow-xl px-6 pt-6 rounded-xl mr-6 relative pb-[4.75rem]">
            <div className="flex items-center">
              <div className="">
                <div className="">
                  <img
                    src={INTSingleCandidate?.avatar}
                    className=" w-[80px] h-[80px] border-4 rounded-full border-green"
                  />
                </div>
              </div>
              <div className="ml-6 text-xl font-medium">
                {INTSingleCandidate?.name}
              </div>
            </div>
            <hr className="my-5" />
            <div className="">
              <div className="text-gray-400">Educations</div>
              {INTSingleCandidate?.information &&
                JSON.parse(INTSingleCandidate?.information)?.education?.map(
                  (item: any) => (
                    <div className="ml-4">
                      <div className="flex items-center mt-2 text-sm">
                        <AcademicCapIcon className="w-[15px] h-[15px] mt-[3px] mr-1" />
                        {item.school}
                      </div>
                      <div className="text-gray-500 text-xs flex ml-[19px]">
                        {item.major} - {item.graduatedYear}
                      </div>
                    </div>
                  ),
                )}
              <div className="mt-3 mb-2 text-gray-400">Experiences</div>
              {INTSingleCandidate?.information &&
                JSON.parse(INTSingleCandidate?.information)?.experience?.map(
                  (item: any) => (
                    <div className="ml-4">
                      <div className="flex mt-2 text-sm">
                        <BriefcaseIcon className="w-[15px] h-[15px] mt-[3px] mr-1" />
                        {item.companyName}
                      </div>
                      <div className="text-gray-500 text-xs flex ml-[19px]">
                        {item.position}
                      </div>
                      <div className="text-gray-500 text-xs flex ml-[19px]">
                        {item.dateFrom} - {item.dateTo}
                      </div>
                    </div>
                  ),
                )}
              <div className="mt-3 mb-2 text-gray-400">Projects</div>
              {INTSingleCandidate?.information &&
                JSON.parse(INTSingleCandidate?.information)?.project?.map(
                  (item: any) => <div className="ml-4"></div>,
                )}
              <div className="mt-3 mb-2 text-gray-400">Skills</div>
              <div className="flex">
                {INTSingleCandidate.jobSkills?.map((item: any) => (
                  <div className="px-2 py-1 mr-2 text-sm text-white bg-green-600 hover:bg-green-800 rounded-xl">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <Link to={INTSingleCandidate?.cv} target="_blank">
              <button className="absolute px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-800 bottom-4 left-6">
                View CV
              </button>
            </Link>
          </div>
          <div
            className="w-7/12 border-2 shadow-xl px-6 pt-6 rounded-xl
               sticky top-[104px] h-[660px]"
          >
            <div style={{ height: "250px", overflowY: "scroll" }}>
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="text-white bg-green-600">
                    <th className="px-4 py-2">Question</th>
                    <th className="px-2 py-2">Type</th>
                    <th className="px-2 py-2">Skill</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedQuestionsStatus === STATUS.LOADING && (
                    <tr className="h-[70px]">
                      <td colSpan={4}>
                        <div className="flex justify-center">
                          <LoadSpinner className="w-8 h-8 mt-2" />
                        </div>
                      </td>
                    </tr>
                  )}
                  {assignedQuestionsStatus === STATUS.IDLE &&
                    assignedQuestions?.map((item: any) => (
                      <tr
                        onClick={() => {
                          handleClick(item);
                        }}
                        key={item.questionId}
                        className={
                          clickedQuestion?.questionId === item.questionId
                            ? "bg-green-100"
                            : "bg-white"
                        }
                      >
                        <td className="px-4 py-2 border-green-500">
                          {truncatedString(item.content)}
                        </td>
                        <td className="px-2 py-2">{item.typeQuestion}</td>
                        <td className="px-2 py-2 text-center">{item.skill}</td>
                        <td className="px-4 py-2 text-center">
                          <div className="flex items-center justify-center">
                            <TrashIcon
                              onClick={() => {
                                handleDelete(item);
                              }}
                              className="w-5 h-5 ml-3 mr-2 text-gray-500 cursor-pointer"
                            />
                            {item.score && (
                              <CheckIcon className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-5 mt-10 bg-green-600 rounded-xl">
              <div className="flex">
                <div className="w-9/12 px-2 py-2 bg-white rounded-xl">
                  {clickedQuestion?.content}
                </div>
                <div className="w-3/12 ml-4">
                  <div>
                    <label htmlFor="score" className="text-xl text-white">
                      Score:{" "}
                    </label>
                  </div>
                  <input
                    value={scoreForm}
                    type="number"
                    id="score"
                    className="px-2 py-2 mt-1 bg-white rounded-xl"
                    onChange={(event) =>
                      handleChangeScore(clickedQuestion?.questionId, event)
                    }
                    required
                    min="0"
                    max="10"
                  ></input>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="note" className="mt-2 text-xl text-white">
                    Note:{" "}
                  </label>
                </div>
                <textarea
                  value={noteForm}
                  id="note"
                  onChange={(event) =>
                    handleChangeNote(clickedQuestion?.questionId, event)
                  }
                  className="w-full bg-white rounded-xl px-2 py-2 min-h-[100px] mt-1"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div>
                <button
                  className="px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-800"
                  onClick={handleOpenModal}
                >
                  Add Question
                </button>
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={handleCloseModal}
                  contentLabel="My Dialog"
                  style={{
                    overlay: {
                      backgroundColor: "rgba(0, 0, 0, 0.75)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    content: {
                      position: "static",
                      width: "550px",
                      padding: "20px",
                    },
                  }}
                >
                  <form
                    onSubmit={(event: any) => {
                      handleSubmitQ(event);
                    }}
                  >
                    <div className="text-lg font-semibold">Content: </div>
                    <textarea
                      id="content"
                      className="w-full border-2 mt-2 h-[130px] px-2 py-2"
                      value={contentQ}
                      onChange={handleChangeContentQ}
                      required
                    />
                    <div className="flex">
                      <div className="w-8/12 mr-6">
                        <div className="text-lg font-semibold">Note: </div>
                        <textarea
                          id="noteAdd"
                          className="w-full border-2 mt-2 h-[130px] px-2 py-2"
                          value={noteQ}
                          onChange={handleChangeNoteQ}
                        />
                      </div>
                      <div className="w-4/12">
                        <div className="">
                          <div className="text-lg font-semibold">Type: </div>
                          <select
                            className="px-2 py-2 mt-2 mr-4 border-2"
                            id="questionType"
                            value={typeQ}
                            onChange={handleChangeTypeQ}
                            required
                          >
                            <option value="">None</option>
                            {types.map((type: any, index: any) => (
                              <option key={index} value={type}>
                                {TYPE_alter[type]}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <div className="mt-2 text-lg font-semibold">
                            Skill:{" "}
                          </div>
                          <select
                            className="px-2 py-2 mt-2 border-2"
                            id="skill"
                            value={skillQ}
                            onChange={handleChangeSkillQ}
                            required
                          >
                            <option value="">None</option>
                            {skills.map((skill: any) => (
                              <option key={skill.skillId} value={skill.skillId}>
                                {skill.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button
                        className="bg-green-600 hover:bg-green-800 text-white font-bold py-1.5 px-2.5 rounded mr-2"
                        type="submit"
                      >
                        Add
                      </button>
                      <button
                        className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-1.5 px-2.5 rounded"
                        onClick={handleCloseModal}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </Modal>
              </div>
              {/*    <Link to={`/interviewer/interview-recent/${ID}`}> */}
              <button
                className="px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-800"
                onClick={handleMarkScore}
              >
                Mark Score
              </button>
              {/*    </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (INTSingleCandidateStatus === STATUS.ERROR404) {
    return <Error errorCode={STATUS.ERROR404} />;
  } else if (INTSingleCandidateStatus === STATUS.ERROR500) {
    return <Error errorCode={STATUS.ERROR500} />;
  }
}
