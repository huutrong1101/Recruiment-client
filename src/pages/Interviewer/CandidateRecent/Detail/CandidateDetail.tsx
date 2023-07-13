import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MapPinIcon, BriefcaseIcon } from "@heroicons/react/20/solid";

const CandidateDetail = () => {
    const style = {
        'z-index': '999'
    };
    const { id } = useParams();
    const {candidatesRecent} = useSelector((state:any) => state.candidateRecent);
    const candidate = candidatesRecent.find((candidate:any) => candidate.id === parseInt(id || ''));
    return (
        <div className="CandidateDetail mb-10">
            <div className="flex">
                <div className="w-3/12 relative">
                    <div className="absolute top-0 bg-gray-800 h-[175px] w-full"></div>
                    <div className="flex items-center justify-center pt-[3rem]">
                        <img src={candidate.avatar} className=" w-[220px] h-auto z-10 rounded-full"/>
                    </div>
                </div>
                <div className="w-9/12 relative">
                    <div className="absolute top-0 bg-gray-800 h-[175px] w-full"></div>
                    <div className="flex pt-[8rem]">
                        <div className="z-10 flex">
                            <div className="text-white text-2xl mr-6">
                                {candidate.name} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-[2rem]">
                <div className="w-4/12 pl-[2rem]">
                    <div className="text-gray-300">
                        works___________________________
                    </div>

                    <div className="ml-4">
                        <div className="mt-4 text-sm">FPT Software</div>
                        <div className="text-gray-500 text-xs flex ml-2 mt-1">
                            <MapPinIcon className="w-[15px] h-[15px] mt-[1px] mr-1" />
                            Đường D1, khu CNC, Quận 9
                        </div>
                        <div className="text-gray-500 text-xs flex ml-2">
                            <BriefcaseIcon className="w-[15px] h-[15px] mt-[1px] mr-1" /> 10/2012 - 9/2023
                        </div>
                    </div>
                    <div className="ml-4">
                        <div className="mt-4 text-sm">
                            SpaceX Company
                        </div>
                        <div className="text-gray-500 text-xs flex ml-2 mt-1">
                            <MapPinIcon className="w-[15px] h-[15px] mt-[1px] mr-1" />
                            KTX khu A, DHQG, Thủ Đức
                        </div>
                        <div className="text-gray-500 text-xs flex ml-2">
                            <BriefcaseIcon className="w-[15px] h-[15px] mt-[1px] mr-1" /> 5/2005 - 1/2010
                        </div>
                    </div>

                    <div className="text-gray-300 mt-3 mb-4">
                        skills___________________________
                    </div>

                    <div className="ml-4">
                        <div className="text-sm">Branding</div>
                        <div className="text-sm">UI/UX</div>
                        <div className="text-sm">Web-Design</div>
                    </div>
                </div>
                <div className="w-8/12">
                        123213
                </div>
            </div>
        </div>
    );
}

export default CandidateDetail;