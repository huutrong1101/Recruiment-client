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
import JobDescriptionWidget from "./JobDescriptionWidget";
import Logo from "./../../../images/logo_FPT.png";
import JobInformationCard from "./JobInformationCard";
import JobCard from "../../components/JobCard/JobCard";

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
      <div className={classNames(`flex flex-col md:flex-row gap-12`)}>
        {/* Left side description */}
        <div className={classNames(`w-full md:w-8/12`, `flex flex-col gap-6`)}>
          {/* Widgets */}
          <JobDescriptionWidget
            companyName="FPT Software"
            jobRole="Web Designer"
            publishDate={new Date()}
            logo={{ src: Logo, alt: "image" }}
          />
          {/* Details */}
          <div
            className={classNames(
              `border bg-white shadow-sm rounded-xl`,
              `px-8 py-8`,
              `text-justify`,
            )}
          >
            <div>
              <h1 className="text-2xl font-semibold">Job description</h1>
              <p>
                One disadvantage of Lorum Ipsum is that in Latin certain letters
                appear more frequently than others - which creates a distinct
                visual impression. Moreover, in Latin only words at the
                beginning of sentences are capitalized. This means that Lorem
                Ipsum cannot accurately represent, for example, German, in which
                all nouns are capitalized. Thus, Lorem Ipsum has only limited
                suitability as a visual filler for German texts. If the fill
                text is intended to illustrate the characteristics of different
                typefaces. It sometimes makes sense to select texts containing
                the various letters and symbols specific to the output language.
              </p>
              <br />
              <p>
                One disadvantage of Lorum Ipsum is that in Latin certain letters
                appear more frequently than others - which creates a distinct
                visual impression. Moreover, in Latin only words at the
                beginning of sentences are capitalized. This means that Lorem
                Ipsum cannot accurately represent, for example, German, in which
                all nouns are capitalized. Thus, Lorem Ipsum has only limited
                suitability as a visual filler for German texts. If the fill
                text is intended to illustrate the characteristics of different
                typefaces. It sometimes makes sense to select texts containing
                the various letters and symbols specific to the output language.
              </p>
              <p>
                One disadvantage of Lorum Ipsum is that in Latin certain letters
                appear more frequently than others - which creates a distinct
                visual impression. Moreover, in Latin only words at the
                beginning of sentences are capitalized. This means that Lorem
                Ipsum cannot accurately represent, for example, German, in which
                all nouns are capitalized. Thus, Lorem Ipsum has only limited
                suitability as a visual filler for German texts. If the fill
                text is intended to illustrate the characteristics of different
                typefaces. It sometimes makes sense to select texts containing
                the various letters and symbols specific to the output language.
              </p>
              <p>
                One disadvantage of Lorum Ipsum is that in Latin certain letters
                appear more frequently than others - which creates a distinct
                visual impression. Moreover, in Latin only words at the
                beginning of sentences are capitalized. This means that Lorem
                Ipsum cannot accurately represent, for example, German, in which
                all nouns are capitalized. Thus, Lorem Ipsum has only limited
                suitability as a visual filler for German texts. If the fill
                text is intended to illustrate the characteristics of different
                typefaces. It sometimes makes sense to select texts containing
                the various letters and symbols specific to the output language.
              </p>
              <p>
                One disadvantage of Lorum Ipsum is that in Latin certain letters
                appear more frequently than others - which creates a distinct
                visual impression. Moreover, in Latin only words at the
                beginning of sentences are capitalized. This means that Lorem
                Ipsum cannot accurately represent, for example, German, in which
                all nouns are capitalized. Thus, Lorem Ipsum has only limited
                suitability as a visual filler for German texts. If the fill
                text is intended to illustrate the characteristics of different
                typefaces. It sometimes makes sense to select texts containing
                the various letters and symbols specific to the output language.
              </p>
              <p>
                One disadvantage of Lorum Ipsum is that in Latin certain letters
                appear more frequently than others - which creates a distinct
                visual impression. Moreover, in Latin only words at the
                beginning of sentences are capitalized. This means that Lorem
                Ipsum cannot accurately represent, for example, German, in which
                all nouns are capitalized. Thus, Lorem Ipsum has only limited
                suitability as a visual filler for German texts. If the fill
                text is intended to illustrate the characteristics of different
                typefaces. It sometimes makes sense to select texts containing
                the various letters and symbols specific to the output language.
              </p>
              <p>
                One disadvantage of Lorum Ipsum is that in Latin certain letters
                appear more frequently than others - which creates a distinct
                visual impression. Moreover, in Latin only words at the
                beginning of sentences are capitalized. This means that Lorem
                Ipsum cannot accurately represent, for example, German, in which
                all nouns are capitalized. Thus, Lorem Ipsum has only limited
                suitability as a visual filler for German texts. If the fill
                text is intended to illustrate the characteristics of different
                typefaces. It sometimes makes sense to select texts containing
                the various letters and symbols specific to the output language.
              </p>
              <p>
                One disadvantage of Lorum Ipsum is that in Latin certain letters
                appear more frequently than others - which creates a distinct
                visual impression. Moreover, in Latin only words at the
                beginning of sentences are capitalized. This means that Lorem
                Ipsum cannot accurately represent, for example, German, in which
                all nouns are capitalized. Thus, Lorem Ipsum has only limited
                suitability as a visual filler for German texts. If the fill
                text is intended to illustrate the characteristics of different
                typefaces. It sometimes makes sense to select texts containing
                the various letters and symbols specific to the output language.
              </p>
            </div>
          </div>
        </div>

        {/* Right side description */}
        <div className={classNames(`w-full md:w-3/12 flex-1 relative`)}>
          <JobInformationCard cardData={jobInformation} />
        </div>
      </div>

      {/* Footer */}
      <div
        className={classNames(
          `flex flex-col gap-2 items-center justify-center my-12`,
        )}
      >
        <h1 className={classNames(`text-3xl font-semibold`)}>
          Related Vacancies
        </h1>
        <h2 className={classNames(`text-lg text-zinc-500`)}>
          Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 30000+ companies worldwide.
        </h2>
        <div className={classNames(`flex flex-col md:flex-row gap-6`)}>
          {/* TODO: add job fetch data */}
          {new Array(3)
            .fill({
              job: {
                jobId: 1,
                createdAt: new Date(),
                jobType: "Part time",
                name: "Frontend Developer Intern",
                location: "HCMC",
                quantity: 10,
              },
            })
            .map((data) => {
              return <JobCard job={data} />;
            })}
        </div>
      </div>
    </div>
  );
}
