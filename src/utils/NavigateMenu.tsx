import {
  HiUserCircle,
  HiCog6Tooth,
  HiQuestionMarkCircle,
  HiArrowLeftOnRectangle,
  HiInformationCircle,
  HiEnvelope,
} from "react-icons/hi2";

export const prepareMenuItem = (data: any) => [
  {
    url: "/profile/",
    icon: <HiUserCircle />,
    text: "My Profile",
  },
  ...data,
  {
    url: "/logout",
    icon: <HiArrowLeftOnRectangle />,
    text: "Log out",
  },
];

const candidateProvider = [
  {
    url: "/profile/resume",
    icon: <HiEnvelope />,
    text: "My Resume",
  },

  {
    url: "/profile/interviews",
    icon: <HiCog6Tooth />,
    text: "Interview",
  },
  {
    url: "/profile/submitted-jobs",
    icon: <HiQuestionMarkCircle />,
    text: "Submitted Jobs",
  },
];

const informationProvider = [
  {
    url: "/profile/information",
    icon: <HiInformationCircle />,
    text: "My Information",
  },
];

export const prepareCandidateProvider = () => {
  return prepareMenuItem([...informationProvider, ...candidateProvider]);
};

export const prepareInterviewerProvider = () => {
  return prepareMenuItem([...informationProvider]);
};

export const prepareOtherProvider = () => {
  return prepareMenuItem([]);
};
