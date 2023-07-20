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

export default function JobInformationCard({ cardData }: any) {
  let [isOpen, setIsOpen] = useState(false);

  const handleApply = () => {
    alert("Apply success");
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
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
        <PrimaryButton text={`Apply now`} onClick={openModal} />
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Apply for Web Designer"
        titleClass="text-lg font-medium leading-6 text-center text-gray-900"
        cancelTitle="Cancel"
        successClass="text-red-900 bg-red-100 hover:bg-red-200 focus-visible:ring-red-500"
        successTitle="Apply"
        size="max-w-3xl"
        handleSucces={handleApply}
      >
        <div>
          <div className="flex gap-5 mt-2">
            <div className="w-1/2">
              <h3 className="text-xl font-bold leading-7 text-center text-green-600">
                Information
              </h3>
              <div className="flex flex-col gap-5 mt-4">
                <InputIcon
                  icon={<HiUserCircle />}
                  placeholder={`Full Name`}
                  // {...register("phone")}
                  name={`phone`}
                />

                <InputIcon
                  icon={<HiEnvelope />}
                  placeholder={`Email`}
                  // {...register("phone")}
                  name={`phone`}
                />

                <InputIcon
                  icon={<HiMapPin />}
                  placeholder={`Location`}
                  // {...register("phone")}
                  name={`phone`}
                />

                <InputIcon
                  icon={<HiPhone />}
                  placeholder={`Phone`}
                  // {...register("phone")}
                  name={`phone`}
                />
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="text-xl font-bold leading-7 text-center text-green-600">
                Resume
              </h3>
              <div className="flex flex-col gap-5 mt-4">
                <div>
                  <label
                    className={classNames(
                      `flex flex-row items-center justify-start`,
                      `bg-white text-zinc-500`,
                      `rounded-md`,
                      `border w-full`,
                    )}
                  >
                    <input
                      type="radio"
                      name="resume"
                      value="resume1"
                      className={classNames(`w-4 mx-2`)}
                    />
                    <span
                      className={classNames(
                        `p-2`,
                        `font-light`,
                        `outline-none rounded-r-md`,
                        `w-full`,
                      )}
                    >
                      Resume #1
                    </span>
                  </label>
                </div>
                <div>
                  <label
                    className={classNames(
                      `flex flex-row items-center justify-start`,
                      `bg-white text-zinc-500`,
                      `rounded-md`,
                      `border w-full`,
                    )}
                  >
                    <input
                      type="radio"
                      name="resume"
                      value="resume2"
                      className={classNames(`w-4 mx-2`)}
                    />
                    <span
                      className={classNames(
                        `p-2`,
                        `font-light`,
                        `outline-none rounded-r-md`,
                        `w-full`,
                      )}
                    >
                      Resume #2
                    </span>
                  </label>
                </div>
                <div>
                  <label
                    className={classNames(
                      `flex flex-row items-center justify-start`,
                      `bg-white text-zinc-500`,
                      `rounded-md`,
                      `border w-full`,
                    )}
                  >
                    <input
                      type="radio"
                      name="resume"
                      value="resume3"
                      className={classNames(`w-4 mx-2`)}
                    />
                    <span
                      className={classNames(
                        `p-2`,
                        `font-light`,
                        `outline-none rounded-r-md`,
                        `w-full`,
                      )}
                    >
                      Resume #3
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5">
            <textarea
              className="w-full p-3 border border-gray-500"
              placeholder="Your Note"
            />
          </div>
        </div>
      </Modal>
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
