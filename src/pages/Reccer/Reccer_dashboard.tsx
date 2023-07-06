import React from "react";
import classnames from "classnames";
import image from "../../../images/sprite.png";
import { Outlet } from "react-router-dom";

export default function ReccerDashboard() {
    return (
        <div className=" absolute Status w-[892px] h-28 justify-start items-start gap-7 inline-flex ab">
            <div className="Status w-[202px] h-28 relative bg-sky-100 rounded-2xl">
                <div className="Views left-[24px] top-[24px] absolute text-zinc-900 text-[14px] font-semibold leading-tight">Views</div>
                <div className=" left-[24px] top-[52px] absolute text-zinc-900 text-[24px] font-semibold leading-9">721K</div>
                <div className="BadgeTag h-5 pl-1 pr-0.5 py-[1px] left-[108px] top-[60px] absolute rounded justify-center items-center gap-1 inline-flex">
                    <div className="Text text-right text-zinc-900 text-[12px] font-normal leading-none">+11.01%</div>
                    <div className="ArrowriseS w-4 h-4 relative" />
                </div>
            </div>
            <div className="Status w-[202px] h-28 relative bg-green-100 rounded-2xl">
                <div className="Views left-[24px] top-[24px] absolute text-zinc-900 text-[14px] font-semibold leading-tight">Visits</div>
                <div className=" left-[24px] top-[52px] absolute text-zinc-900 text-[24px] font-semibold leading-9">367K</div>
                <div className="BadgeTag h-5 pl-1 pr-0.5 py-[1px] left-[108px] top-[60px] absolute rounded justify-center items-center gap-1 inline-flex">
                    <div className="Text text-right text-zinc-900 text-[12px] font-normal leading-none">+11.01%</div>
                    <div className="ArrowriseS w-4 h-4 relative" />
                </div>
            </div>
            <div className="Status w-[202px] h-28 relative bg-sky-100 rounded-2xl">
                <div className="Views left-[24px] top-[24px] absolute text-zinc-900 text-[14px] font-semibold leading-tight">New Users</div>
                <div className=" left-[24px] top-[52px] absolute text-zinc-900 text-[24px] font-semibold leading-9">1,156</div>
                <div className="BadgeTag h-5 pl-1 pr-0.5 py-[1px] left-[108px] top-[60px] absolute rounded justify-center items-center gap-1 inline-flex">
                    <div className="Text text-right text-zinc-900 text-[12px] font-normal leading-none">+11.01%</div>
                    <div className="ArrowfallS w-4 h-4 relative" />
                </div>
            </div>
            <div className="Status w-[202px] h-28 relative bg-green-100 rounded-2xl">
                <div className="Views left-[24px] top-[24px] absolute text-zinc-900 text-[14px] font-semibold leading-tight">Active Users</div>
                <div className=" left-[24px] top-[52px] absolute text-zinc-900 text-[24px] font-semibold leading-9">239K</div>
                <div className="BadgeTag h-5 pl-1 pr-0.5 py-[1px] left-[108px] top-[60px] absolute rounded justify-center items-center gap-1 inline-flex">
                    <div className="Text text-right text-zinc-900 text-[12px] font-normal leading-none">+11.01%</div>
                    <div className="ArrowfallS w-4 h-4 relative" />
                </div>
            </div>
        </div>

    )
}
