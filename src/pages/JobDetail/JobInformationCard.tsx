import classNames from "classnames";
import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import JobInformationApplyModal from "./JobInformationApplyModal";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setJobIsApplied } from "./slice/JobDetailSlice";
import { useNavigate } from "react-router-dom";

export default function JobInformationCard({ cardData }: any) {
  const [visibleApplyDialog, setVisibleApplyDialog] = useState<boolean>(false);
  const { isLoggedIn } = useAppSelector((app) => app.Auth);
  const { isApplied } = useAppSelector((state) => state.JobDetail.response);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const toggleVisibleApplyModal = () => {
    setVisibleApplyDialog((isVisible) => !isVisible);
  };

  const handleOnApplySucceeded = () => {
    dispatch(setJobIsApplied(true));

    toggleVisibleApplyModal();
  };

  const handleNavigateToSignIn = () => {
    navigate(`/auth/login`);
  };

  return (
    <div
      className={classNames(
        `w-full bg-white shadow-sm px-4 py-6 rounded-xl border sticky top-4`,
        `flex flex-col gap-4`,
      )}
    >
      <h1 className={classNames(`font-semibold text-xl`)}>Job Information</h1>
      <div className={classNames(`flex flex-col gap-3`)}>
        {cardData &&
          cardData.map((item: any) => {
            return (
              <JobInformationCardItem
                icon={item.icon}
                name={item.name}
                value={item.value}
              />
            );
          })}
      </div>
      <div>
        {!isLoggedIn ? (
          <PrimaryButton
            text={`Sign in to apply`}
            onClick={handleNavigateToSignIn}
          />
        ) : (
          <>
            {!isApplied ? (
              <PrimaryButton text={`Apply`} onClick={toggleVisibleApplyModal} />
            ) : (
              <div
                className={classNames(
                  `px-4 bg-emerald-500 py-2 text-emerald-100 rounded-xl`,
                )}
              >
                Your applicant is considering
              </div>
            )}
          </>
        )}
      </div>

      <JobInformationApplyModal
        visible={visibleApplyDialog}
        onClose={toggleVisibleApplyModal}
        onApplySucceeded={handleOnApplySucceeded}
      />
    </div>
  );
}

interface JobInformationCardItemProps {
  icon: React.ReactElement;
  name: string;
  value: string;
}

function JobInformationCardItem({
  icon,
  name,
  value,
}: JobInformationCardItemProps) {
  return (
    <div className={classNames(`flex flex-row items-center gap-4`)}>
      <div className={classNames(`w-1/12 mx-2`)}>{icon}</div>
      <div className={classNames(`flex flex-col flex-1`)}>
        <span>{name}</span>
        <span className={classNames(`text-teal-700`)}>{value}</span>
      </div>
    </div>
  );
}
