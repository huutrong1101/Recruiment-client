import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CandidateDetail = () => {
    const { id } = useParams();
    const {candidatesRecent} = useSelector((state:any) => state.candidateRecent);
    const candidate = candidatesRecent.find((candidate:any) => candidate.id === parseInt(id || ''));
    return (
        <div className="CandidateDetail">
            <div className="flex">
                <div className="w-5/12">
                    <img src={candidate.avatar} />
                </div>
                <div className="w-7/12">
                    {candidate.name} 
                </div>
            </div>
        </div>
    );
}

export default CandidateDetail;