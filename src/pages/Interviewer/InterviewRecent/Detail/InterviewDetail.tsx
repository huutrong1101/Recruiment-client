import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/hooks";
import { MapPinIcon, BriefcaseIcon } from "@heroicons/react/20/solid";

const InterviewDetail = () => {

    const { id } = useParams(); 
    const {interviewsRecent} = useAppSelector((state: any) => state.interviewRecent);

    const interview = interviewsRecent.find((interview:any) => interview.id === parseInt(id || ''));

    return (
        <div className="InterviewDetail ">
            <div className="mb-8 flex mt-4">
                <div className="">
                    <div className='text-2xl'>Interview Information</div>
                    <div className="ml-4">
                        <div className="mt-3 text-base">Position Recruiment: <span className="text-sm ml-2">Java Developer</span></div>
                        <div className="text-base">Date: <span className="text-sm ml-2">{interview.updatedAt}</span></div>
                        <div className="text-base">Link Meeting: <span className="text-sm ml-2">https://meet.google.com/aie-oirf-qnm</span></div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="mb-8">
                <div className='text-2xl mt-4'>Profile Candidate</div>
                <div className="flex">
                    <div className="w-4/12">
                        <div className="flex items-center justify-center pt-[2rem]">
                            <img src={interview.avatar} className=" w-[180px] h-[180px] border-4 "/>
                        </div>
                    </div>
                    <div className="w-8/12">
                        <div className="flex pt-[2rem]">
                            <div className="text-2xl mr-4">
                                {interview.name} 
                            </div>
                            <div className="flex mt-1">
                                <div className="text-base">
                                    <MapPinIcon className="w-[14px] h-[14px] mt-[6px] mr-1" />
                                </div>
                                <div className="text-base">
                                    Khánh Hòa
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-300 mt-5 text-sm">
                            contacts___________________________
                        </div>
                        <div className="ml-4">
                            <div className="mt-2 text-base">Phone: <span className="text-sm ml-2">+84 367120031</span></div>
                            <div className="text-base">Address: <span className="text-sm ml-2">Đường D1, khu CNC, Quận 9</span></div>
                            <div className="text-base">Birtday: <span className="text-sm ml-2">01-01-2000</span></div>
                            <div className="text-base">Email: <span className="text-sm ml-2">{interview.email}</span></div>
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
                            <div className="text-sm">Branding</div>
                            <div className="text-sm">UI/UX</div>
                            <div className="text-sm">Web-Design</div>
                        </div>
                    </div>
                    <div className="w-8/12">
                        <div className="text-gray-300">_______________________________________</div>
                        <div className="text-gray-300 text-sm mt-2">
                            DESCRIPTION
                        </div>
                        <div className="ml-4 mt-2">
                            <p>Trong bóng tối của đêm, gió mát lướt qua những cành cây run rẩy. Những ánh đèn nhỏ lung linh phát ra ánh sáng nhẹ nhàng, tạo nên một khung cảnh thật đẹp. Những tiếng chim kêu từ xa càng làm thêm phần thơ mộng cho cảnh vật này.</p>
                        </div>
                        <div className="text-gray-300 text-sm mt-2">
                            EXPERIENCE
                        </div>
                        <div className="ml-4 mt-2">
                            <p>Trong bóng tối của đêm, gió mát lướt qua những cành cây run rẩy. Những ánh đèn nhỏ lung linh phát ra ánh sáng nhẹ nhàng, tạo nên một khung cảnh thật đẹp. Những tiếng chim kêu từ xa càng làm thêm phần thơ mộng cho cảnh vật này.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Link to="/interviewer/score-page">
                        <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                            Start Interview
                        </button>      
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default InterviewDetail;