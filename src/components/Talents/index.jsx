import React from "react";


export function Talents(){
    return (
        <div className="pl-[80px] pr-[24px] pt-[73px] pb-[112px] grid grid-cols-2 relative">
            <img src="/images/Vector.svg" alt="vector" className="absolute right-0 h-[580px]" style={{zIndex:0}}/>
            <div className="pr-[80px] grid place-items-center">
<div className="h-fit my-aut">
<h3 className="font-bold text-[40px] text-white">Hire <span className="gradient-text">Top Talents</span></h3>
                <p className="text-[18px] text-white talent-para text-justify mt-[20px]">When it comes to finding exceptional talent, Synergy has you covered. With our extensive talent pool, we offer a unique opportunity to tap into a vast reserve of undiscovered and unexplored talent.
<br/><br/>
Say goodbye to the challenges of finding the best talent and unlock the potential that awaits your organization.</p>
<div className="flex gap-x-[24px] items-center mt-[48px]">
    <button className="flex items-center gap-x-[7px] rounded-[8px] p-[16px] bg-[#42B8BD] text-[14px] font-medium text-mine">
        Get Access 
        <img src="/images/access-arrow-black.svg" alt="access arrow" />
    </button>
    <button className="flex items-center gap-x-[7px] rounded-[8px] p-[16px] text-[14px] font-medium text-light" style={{border: '1px solid #42B8BD'}}>
        Learn More
        <img src="/images/access-arrow-blue.svg" alt="access arrow" />
    </button>
</div>
</div>
            </div>
            <div className="bg-[#02435599]" style={{zIndex:100}}>
                <img src="/images/talent.svg" alt="talent" style={{transform:'translateX(24px) translateY(24px)'}}/>
            </div>
        </div>
    )
}