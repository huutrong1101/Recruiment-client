import React from 'react'
import {ClockIcon,} from "@heroicons/react/24/outline";

export default function EvenDetail() {
    let Manageevent ={
        nameevent   : "DigitalOcean launches first Canadian data centre in Toronto",
        infodetal   : "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.",
        by          : "Google",
        actorname   : "Cristina Romsey",
    };
    let ActorInfo  = {
        linkgitlab      :    "#",
        linkfacebook    :    "#",
        linkinstargram  :    "#",
        linktwiter      :    "#",
        linkyoutube     :    "#",
        linklinkedin    :    "#",
    }
    return (
        <div className="relative">
            <div className="bg-white rounded-[13px] shadow">
                <div className="">
                <div className="absolute text-black text-base font-extralight capitalize leading-[21px] tracking-tight">title</div>
                <div className="absolute text-black text-[17px] font-normal capitalize leading-7 tracking-tight">name Actor</div>
                <img className="left-0 top-0 absolute rounded-tl-[13px] rounded-tr-[13px]" src="https://via.placeholder.com/652x500" alt ="" />
                <div className="absolute"><span style="text-zinc-600 text-xs font-light capitalize leading-7 tracking-tight">By</span><span style="text-black text-xs font-light capitalize leading-7 tracking-tight"> Google</span></div>
                </div>
            </div>
        </div>
    )
}
