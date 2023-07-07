import React from "react";
import Reveal from 'react-reveal/Reveal';



export function FrontSection(){
    return (
        <div className="pt-[71px] relative">
                <img src="/images/strand1.svg" alt="strand" />
            <div className="flex justify-between items-center px-[89px] mb-[59px]">
            <Reveal left>
            <div className="py-[12px] px-[10px] bg-white rounded-[7.2px] mr-[27.14px] w-fit">
                <div className="flex items-start gap-x-[8px]">
                <img src="/images/badge.svg" alt="payment" />
               <div>
               <div>
                    <h2 className="font-semibold text-[9px] text-mine">Product Designer</h2>
                    <p className="text-[7.2px] font-normal text-[#285E6A]">Paystack Limited</p>
                </div>
                <div className="mt-[5.4px] flex items-center gap-x-[4px]">
                    <button className="font-medium text-[white] text-[6px] px-[7.5px] py-[3px] rounded-[5.25px] bg-[#024355]">Full time</button>
                    <button className="font-medium text-[white] text-[6px] px-[7.5px] py-[3px] rounded-[5.25px] bg-[#024355]">Remote</button>
                </div>
               </div>
               <img src="/images/paystack.svg" alt="badge" className="ml-[20px]" />
                </div>
            <div>
                <button className="w-full py-[6px] text-[6px] text-white rounded-[9px] bg-[#285E6A]">Apply</button>
            </div>
            </div>
            </Reveal>
            <img src="/images/craft.svg" alt="craft" />
            </div>
            <div>
                <h1 className="font-bold text-[64px] text-white text-center main-head">99 Problems But <br/> Finding a Job Isn’t One</h1>
                <p className="font-medium text-[17px] text-white mt-[24px] text-center w-[50%] mx-auto">Synergy is the Multiverse of Opportunity helping young people access the future of their dreams.</p>
                <div className="flex items-center gap-x-[24px] justify-center mt-[48px]">
                    <button className="flex items-center gap-x-[16px] text-[13px] font-medium px-[24px] py-[16px] text-white rounded-[8px]" style={{border:'1px solid #024355'}}>
                        <img src="/images/apple.svg" alt="apple" />
                        Get on Iphone
                    </button>
                    <button className="flex items-center gap-x-[16px] text-[13px] font-medium px-[24px] py-[16px] text-white rounded-[8px]" style={{border:'1px solid #024355'}}>
                        <img src="/images/google-play.svg" alt="apple" />
                        Get on Android
                    </button>
                </div>
                <div className="flex items-center justify-between relative h-[208px]">
                    <div className="py-[13.5px] px-[11.5px] rounded-[8.122px] absolute left-[83px] bg-[#001A24]" style={{border:'0.75px solid #024355', minWidth:'263px'}}>
                        <p className="font-semibold text-[13px] text-white">Offer Letter</p>
                        <p className="text-[10px] text-[#42B8BD] mt-[12px]">Congratulations Tosin!</p>
                        <img src="/images/strand2.svg" alt="strand" className="absolute top-[110%]" />
                    </div>
               <div >
               <div className="bg-transparent w-fit rounded-[22px] absolute right-[80.31px] top-0" style={{border:'0.733px solid #D9D9D9', transform:'translate(7px, -4px)'}}>
                        <div  className="px-[44px] py-[34.5px] rounded-[17.581px] bg-[#10303D] w-fit top-[5px] relative right-[7px]">
                        <div className="absolute right-[-15px] top-[-15px]">
                            <img src="/images/Diamond.svg" alt="diamond" />
                        </div>
                            <img src="/images/user.svg" alt="user" className="w-full h-full" />
                        <div className="mt-[11.63px] text-center text-white">
                            <p className="font-semibold text-[11.72px] text-white">Tosin Jegede</p>
                            <p className="text-[10.255px] font-medium text-[#42B8BD]">Product Designer</p>
                            <div className="flex items-center justify-center">
                                <img src="/images/Location.svg" alt="location" />
                                <p className="text-[10.225px]">Lagos</p>
                            </div>
                        </div>

                    </div>
                </div>
               </div>
                    <div></div>
                </div>
            </div>
            
        </div>
    )
}