import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchINTCandidatesByID } from "../../../../redux/reducer/INTCandidatesSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { Link } from "react-router-dom";
import { MapPinIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { STATUS } from "../../../../utils/Status";
import Loader from "../../../../components/Loader/Loader";


const INTCandidateDetail = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {INTSingleCandidate, INTSingleCandidateStatus} = useAppSelector((state: any) => state.INTCandidates);

    useEffect(() => {
        console.log(id);
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
                        <div className="w-4/12">
                            <div className="flex items-center justify-center pt-[2rem]">
                                <img src={INTSingleCandidate?.avatar} className=" w-[180px] h-[180px] border-4 "/>
                            </div>
                        </div>
                        <div className="w-8/12">
                            <div className="flex pt-[2rem]">
                                <div className="text-2xl mr-4">
                                    {INTSingleCandidate?.fullName} 
                                </div>
                            </div>
                            <div className="text-gray-300 mt-5 text-sm">
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
                    <div className="flex mt-[2rem]">
                        <div className="w-4/12 pl-[2rem]">
                            <div className="text-gray-300">
                                works___________________________
                            </div>
    
                            <div className="ml-4">
                                <div className="mt-2 text-sm">FPT Software</div>
                                <div className="text-gray-500 text-xs flex ml-2 mt-1">
                                    <MapPinIcon className="w-[10px] h-[10px] mt-[3px] mr-1" />
                                    Đường D1, khu CNC, Quận 9
                                </div>
                                <div className="text-gray-500 text-xs flex ml-2">
                                    <BriefcaseIcon className="w-[10px] h-[10px] mt-[3px] mr-1" /> 10/2012 - 9/2023
                                </div>
                            </div>
                            <div className="ml-4">
                                <div className="mt-2 text-sm">
                                    SpaceX Company
                                </div>
                                <div className="text-gray-500 text-xs flex ml-2 mt-1">
                                    <MapPinIcon className="w-[10px] h-[10px] mt-[3px] mr-1" />
                                    Đường D1, khu CNC, Quận 9
                                </div>
                                <div className="text-gray-500 text-xs flex ml-2">
                                    <BriefcaseIcon className="w-[10px] h-[10px] mt-[3px] mr-1" /> 10/2012 - 9/2023
                                </div>
                            </div>
    
                            <div className="text-gray-300 mt-3 mb-2">
                                skills___________________________
                            </div>
    
                            <div className="ml-4">
                                {/* {INTSingleCandidate?.skill.map((itemskill : any) => (
                                    <div className="text-sm">{itemskill}</div>
                                ))} */}
                            </div>
                        </div>
                        <div className="w-8/12">
                            <div className="text-gray-300">_______________________________________</div>
                            <div className="text-gray-300 text-sm mt-2">
                                DESCRIPTION 
                            </div>
                            <div className="ml-4 mt-2">
                                <p>{INTSingleCandidate.about}</p>
                            </div>
                            <div className="text-gray-300 text-sm mt-2">
                                EXPERIENCE
                            </div>
                            <div className="ml-4 mt-2">
                                <p>Trong bóng tối của đêm, gió mát lướt qua những cành cây run rẩy. Những ánh đèn nhỏ lung linh phát ra ánh sáng nhẹ nhàng, tạo nên một khung cảnh thật đẹp. Những tiếng chim kêu từ xa càng làm thêm phần thơ mộng cho cảnh vật này.</p>
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