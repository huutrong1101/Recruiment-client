import classNames from "classnames";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { GrDocumentText } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { RecInterviewerInterface } from "../../services/services";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/AxiosInstance";

export default function RecInterviewerIn4Card({ cardData }: any) {
    const { interviewerId } = useParams();
    const [interviewer, setInterviewer] = useState<RecInterviewerInterface | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      const getInterviewerDetail = async () => {
        setIsLoading(true);
        try {
          const response = await axiosInstance.get(`recruiter/interviewers/${interviewerId}`);
          setInterviewer(response.data.result);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      getInterviewerDetail();
    }, [interviewerId]);
    return (
        <div
            className={classNames(
                `w-full bg-gray-200 drop-shadow-md px-4 py-6 rounded-xl border sticky top-20`,
                `flex flex-col gap-4`,
            )}
        >
            <h1 className={classNames(`font-semibold text-xl`)}>Personal Details</h1>
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
            <div className='mt-3 flex w-full bg-white p-3 items-center justify-center rounded-md shadow '>
                <GrDocumentText />
                <span className='font-medium ms-2'>{interviewer?.fullName}.pdf</span>
                <a href='' className="px-4 py-2 gap-2 ml-4 mt-2 bg-emerald-600 hover:bg-emerald-700 border-emerald-600  text-white rounded-md">Download</a>
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
            <div className={classNames(`w-1/12 mx-2 text-3xl`)}>{icon}</div>
            <div className={classNames(`flex flex-col flex-1`)}>
                <span>{name}</span>
                <span className={classNames(`text-teal-700`)}>{value}</span>
            </div>
        </div>
    );
}
