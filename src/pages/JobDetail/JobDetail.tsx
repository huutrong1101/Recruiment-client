import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClockIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function JobDetail() {
  const { jobId } = useParams();

  const [jobInformation, setJobInformation] = useState([
    { icon: <UserIcon />, name: "Employee Type", value: "Full time" },
    { icon: <MapPinIcon />, name: "Location", value: "Ftown3" },
    {
      icon: <ComputerDesktopIcon />,
      name: "Job Type",
      value: "Back-end Developer",
    },
    { icon: <BriefcaseIcon />, name: "Experience", value: "2+ years" },
    { icon: <AcademicCapIcon />, name: "Qualification", value: "MCA" },
    {
      icon: <CurrencyDollarIcon />,
      name: "Salary",
      value: "12 Mil (negotiable)",
    },
    {
      icon: <ClockIcon />,
      name: "Posted at",
      value: new Date().toDateString(),
    },
  ]);

  return (
    <div className={classNames(`job-detail`)}>
      {jobId}
      <div className={classNames(`flex flex-col md:flex-row gap-12`)}>
        {/* Left side description */}
        <div className={classNames(`w-full md:w-8/12`)}>
          {/* Widgets */}

          {/* Details */}
          <div>
            Job description
            <p>
              One disadvantage of Lorum Ipsum is that in Latin certain letters
              appear more frequently than others - which creates a distinct
              visual impression. Moreover, in Latin only words at the beginning
              of sentences are capitalized. This means that Lorem Ipsum cannot
              accurately represent, for example, German, in which all nouns are
              capitalized. Thus, Lorem Ipsum has only limited suitability as a
              visual filler for German texts. If the fill text is intended to
              illustrate the characteristics of different typefaces. It
              sometimes makes sense to select texts containing the various
              letters and symbols specific to the output language.
            </p>
            <p>
              One disadvantage of Lorum Ipsum is that in Latin certain letters
              appear more frequently than others - which creates a distinct
              visual impression. Moreover, in Latin only words at the beginning
              of sentences are capitalized. This means that Lorem Ipsum cannot
              accurately represent, for example, German, in which all nouns are
              capitalized. Thus, Lorem Ipsum has only limited suitability as a
              visual filler for German texts. If the fill text is intended to
              illustrate the characteristics of different typefaces. It
              sometimes makes sense to select texts containing the various
              letters and symbols specific to the output language.
            </p>
            <p>
              One disadvantage of Lorum Ipsum is that in Latin certain letters
              appear more frequently than others - which creates a distinct
              visual impression. Moreover, in Latin only words at the beginning
              of sentences are capitalized. This means that Lorem Ipsum cannot
              accurately represent, for example, German, in which all nouns are
              capitalized. Thus, Lorem Ipsum has only limited suitability as a
              visual filler for German texts. If the fill text is intended to
              illustrate the characteristics of different typefaces. It
              sometimes makes sense to select texts containing the various
              letters and symbols specific to the output language.
            </p>
            <p>
              One disadvantage of Lorum Ipsum is that in Latin certain letters
              appear more frequently than others - which creates a distinct
              visual impression. Moreover, in Latin only words at the beginning
              of sentences are capitalized. This means that Lorem Ipsum cannot
              accurately represent, for example, German, in which all nouns are
              capitalized. Thus, Lorem Ipsum has only limited suitability as a
              visual filler for German texts. If the fill text is intended to
              illustrate the characteristics of different typefaces. It
              sometimes makes sense to select texts containing the various
              letters and symbols specific to the output language.
            </p>
            <p>
              One disadvantage of Lorum Ipsum is that in Latin certain letters
              appear more frequently than others - which creates a distinct
              visual impression. Moreover, in Latin only words at the beginning
              of sentences are capitalized. This means that Lorem Ipsum cannot
              accurately represent, for example, German, in which all nouns are
              capitalized. Thus, Lorem Ipsum has only limited suitability as a
              visual filler for German texts. If the fill text is intended to
              illustrate the characteristics of different typefaces. It
              sometimes makes sense to select texts containing the various
              letters and symbols specific to the output language.
            </p>
            <p>
              One disadvantage of Lorum Ipsum is that in Latin certain letters
              appear more frequently than others - which creates a distinct
              visual impression. Moreover, in Latin only words at the beginning
              of sentences are capitalized. This means that Lorem Ipsum cannot
              accurately represent, for example, German, in which all nouns are
              capitalized. Thus, Lorem Ipsum has only limited suitability as a
              visual filler for German texts. If the fill text is intended to
              illustrate the characteristics of different typefaces. It
              sometimes makes sense to select texts containing the various
              letters and symbols specific to the output language.
            </p>
            <p>
              One disadvantage of Lorum Ipsum is that in Latin certain letters
              appear more frequently than others - which creates a distinct
              visual impression. Moreover, in Latin only words at the beginning
              of sentences are capitalized. This means that Lorem Ipsum cannot
              accurately represent, for example, German, in which all nouns are
              capitalized. Thus, Lorem Ipsum has only limited suitability as a
              visual filler for German texts. If the fill text is intended to
              illustrate the characteristics of different typefaces. It
              sometimes makes sense to select texts containing the various
              letters and symbols specific to the output language.
            </p>
            <p>
              One disadvantage of Lorum Ipsum is that in Latin certain letters
              appear more frequently than others - which creates a distinct
              visual impression. Moreover, in Latin only words at the beginning
              of sentences are capitalized. This means that Lorem Ipsum cannot
              accurately represent, for example, German, in which all nouns are
              capitalized. Thus, Lorem Ipsum has only limited suitability as a
              visual filler for German texts. If the fill text is intended to
              illustrate the characteristics of different typefaces. It
              sometimes makes sense to select texts containing the various
              letters and symbols specific to the output language.
            </p>
          </div>
        </div>

        {/* Right side description */}
        <div className={classNames(`w-full md:w-3/12 flex-1 relative`)}>
          <JobInformationCard cardData={jobInformation} />
        </div>
      </div>

      {/* Footer */}
      <div></div>
    </div>
  );
}

function JobInformationCard({ cardData }: any) {
  return (
    <div
      className={classNames(
        `w-full bg-white shadow-md px-4 py-6 rounded-xl border sticky top-4`
      )}
    >
      <h1 className={classNames(`font-semibold text-xl mb-2`)}>
        Job Information
      </h1>
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
