import React, {useEffect, useRef, useState} from "react";
import "animate.css"
import "intersection-observer"

export function SuccessStories() {

    const [inView, setInView] = useState(false)
    const targetRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Do something when the target element is in the viewport
           setInView(true)
            // Perform your desired action here
          }
        });
      });
  
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      // Cleanup the observer
      return () => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      };
    }, []);




    return (
        <div>
            <div className="text-center">
                <p className="text-[32px] font-semibold text-[#ECE2DC]">Success Stories</p>
<h3 className={inView ? "animate__animated animate__zoomIn animate__fast text-[40px] font-semibold text-white mt-[18px]": "text-[40px] font-semibold text-white mt-[18px]"} ref={targetRef}>Hear how Synergy is changing lives</h3>

            </div>
            <div className="w-[85%] mx-auto relative mt-[104px]">
                <img src="/images/arrow-left.svg" alt="arrow" className="absolute top-[50%] cursor-pointer"  style={{transform:'translateY(-50%)'}}/>
                <div className="grid grid-cols-2 w-[85%] mx-auto rounded-[8.9px]" style={{border:'1px solid rgba(251, 165, 153, 0.30)'}}>
                    <div className="px-[43px] py-[48px]">
                        <p className="text-[17px] font-medium text-white opacity-90 text-justify">Synergy has been a lifesaver for me! As a recent graduate, I was struggling to find a job that matched my skills and interests. But with the help of Synergy's job search platform, I was able to find my dream job within weeks.</p>
                        <div className="flex mt-[21.4px]">
                            <img src="/images/Star.svg" alt="star" />
                            <img src="/images/Star.svg" alt="star" />
                            <img src="/images/Star.svg" alt="star" />
                            <img src="/images/Star.svg" alt="star" />
                            <img src="/images/Star.svg" alt="star" />
                            <img src="/images/Star.svg" alt="star" />
                        </div>
                    </div>
                    <div className="grid place-items-center" style={{borderLeft:'1px solid rgba(251, 165, 153, 0.30)'}}>
                        <div className="flex flex-col items-center">
                            <img src="/images/story-teller.svg" alt="story" />
                            <p className="text-[19.5px] font-semibold text-white mt-[24px]">Ebubechukwu Agnes</p>
                            <p className="text-[17.758px] text-[#D0D0D0]">Ethical Hacker</p>
                        </div>
                    </div>
                </div>
                <img src="/images/arrow-right.svg" alt="arrow" className="absolute top-[50%] right-0 cursor-pointer"  style={{transform:'translateY(-50%)'}}/>
            </div>
            <div className="flex justify-center gap-x-[8px] mt-[46px] items-center">
                <div className="w-[6px] h-[6px] rounded-[50%] bg-[#ECE2DC] opacity-50"></div>
                <div className="w-[8px] h-[8px] rounded-[50%] bg-[#42B8BD]"></div>
                <div className="w-[6px] h-[6px] rounded-[50%] bg-[#ECE2DC] opacity-50"></div>
                <div className="w-[6px] h-[6px] rounded-[50%] bg-[#ECE2DC] opacity-50"></div>
            </div>
        </div>
    )
}