import classNames from "classnames";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Fragment, useState } from "react";
import InputIcon from "../../components/InputIcon/InputIcon";
import {
  HiUserCircle,
  HiEnvelope,
  HiMapPin,
  HiPhone,
  HiKey,
} from "react-icons/hi2";
import Modal from "../../components/Modal/Modal";
import { useForm } from "react-hook-form";
import JobInformationApplyModal from "./JobInformationApplyModal";

export default function JobInformationCard({ cardData }: any) {
  const [visibleApplyDialog, setVisibleApplyDialog] = useState<boolean>(false);

  const handleApply = (data: any) => {
    console.log(data);
  };

  const toggleVisibleApplyModal = () => {
    setVisibleApplyDialog((isVisible) => !isVisible);
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
        <PrimaryButton text={`Apply now`} onClick={toggleVisibleApplyModal} />
      </div>

      <JobInformationApplyModal
        visible={visibleApplyDialog}
        onClose={toggleVisibleApplyModal}
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
