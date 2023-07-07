import React from "react";


export function NavBar(){
    return (
        <nav className="flex items-center justify-between text-white py-[24px] px-[43px] sticky top-0 bg-mine" style={{zIndex:20}}>
            <div className="flex items-center gap-x-[64px]">
                <div>
                    <img src="/images/synergy-logo.svg" alt="logo" />
                </div>
                <ul className="flex items-center gap-x-[32px] text-[16.5px] font-medium">
                    <li>About Us</li>
                    <li>Success Stories</li>
                    <li>Partnership</li>
                </ul>
            </div>
            <div className="flex items-center gap-x-[14px]">
                <button className="py-[12px] px-[17px] text-light font-semibold text-[16px] rounded-[8px] hover:bg-white hover:border-none hover:text-mine" style={{border:'1px solid #42BBBD', transition:'all 0.3s ease-in'}}>Job Board</button>
                <button className="py-[12px] px-[17px] text-mine font-semibold text-[16px] bg-white rounded-[8px] get-started">Get Started</button>
            </div>
        </nav>
    )
}