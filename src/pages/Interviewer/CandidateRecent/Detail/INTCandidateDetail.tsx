import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchINTCandidatesByID } from "../../../../redux/reducer/INTCandidatesSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { Link } from "react-router-dom";
import { MapPinIcon, BriefcaseIcon, AcademicCapIcon, CheckBadgeIcon} from "@heroicons/react/24/outline";
import { STATUS } from "../../../../utils/Status";
import Loader from "../../../../components/Loader/Loader";


const INTCandidateDetail = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {INTSingleCandidate, INTSingleCandidateStatus} = useAppSelector((state: any) => state.INTCandidates);

    useEffect(() => {
        dispatch(fetchINTCandidatesByID(id));
    }, []);

    if(INTSingleCandidateStatus === STATUS.LOADING){
        return <Loader />
    }else if(INTSingleCandidateStatus === STATUS.IDLE){
        return (
            <div className="INTCandidateDetail">
                <div className="mb-8">
                    <div className='text-2xl mt-4'>Profile Candidate</div>
                    <div className="flex">
                        <div className="w-5/12">
                            <div className="flex items-center pt-[2rem] pl-[2rem]">
                                <img src={INTSingleCandidate?.avatar} className=" w-[180px] h-[180px] border-4 "/>
                            </div>
                        </div>
                        <div className="w-7/12 ">
                            <div className="flex pt-[2rem]">
                                <div className="text-2xl mr-4">
                                    {INTSingleCandidate?.name} 
                                </div>
                            </div>
                            <div className="text-gray-400 mt-5 text-sm ">
                                contacts___________________________
                            </div>
                            <div className="ml-4">
                                <div className="mt-2 text-base">Phone: <span className="text-sm ml-2">{INTSingleCandidate?.phone}</span></div>
                                <div className="text-base">Address: <span className="text-sm ml-2">{INTSingleCandidate?.address}</span></div>
                                <div className="text-base">Birtday: <span className="text-sm ml-2">{INTSingleCandidate?.dateOfBirth}</span></div>
                                <div className="text-base">Email: <span className="text-sm ml-2">{INTSingleCandidate?.email}</span></div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-[2rem] "/>
                    <div className="flex">
                        <div className="w-5/12 pl-[2rem]">
                            <div className="text-gray-400">
                                Educations
                            </div>
    
                            {
                                INTSingleCandidate.educations?.map((item : any) => (
                                    <div className="ml-4">
                                        <div className="mt-2 text-sm">{item.schoolName}</div>
                                        <div className="text-gray-500 text-xs flex ml-2">
                                            <AcademicCapIcon className="w-[10px] h-[10px] mt-[3px] mr-1" /> {item.certificate}
                                        </div>
                                    </div>
                                ))
                            }
    
                            <div className="text-gray-400 mt-3 mb-2">
                                Experiences
                            </div>
    
                            {
                                INTSingleCandidate.experiences?.map((item : any) => (
                                    <div className="ml-4">
                                        <div className="mt-2 text-sm">{item.companyName}</div>
                                        <div className="text-gray-500 text-xs flex ml-2">
                                            <BriefcaseIcon className="w-[10px] h-[10px] mt-[3px] mr-1" /> {item.position}
                                        </div>
                                        <div className="text-gray-500 text-xs flex ml-2">
                                            <CheckBadgeIcon className="w-[10px] h-[10px] mt-[3px] mr-1" /> {item.time}
                                        </div>
                                    </div>
                                ))
                            }

                            <div className="text-gray-400 mt-3 mb-2">
                                Skills
                            </div>
                            <div className="flex">
                                { 
                                    INTSingleCandidate.jobSkills?.map((item : any) => (
                                        <div className="text-white text-sm mr-2 bg-green-600 hover:bg-green-800 px-2 py-1 rounded-xl">{item.name}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="w-7/12">
                            <div className="text-gray-400 text-sm mt-2">
                                DESCRIPTION 
                            </div>
                            <div className="ml-4 mt-2">
                                <p>{INTSingleCandidate?.about}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else if(INTSingleCandidateStatus === STATUS.ERROR){
        return <div>ERROR</div>
    }
}

export default INTCandidateDetail;