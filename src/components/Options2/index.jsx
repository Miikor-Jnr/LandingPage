import React, {useEffect, useRef, useState} from "react";
import "animate.css"


export function Options2({image, title, content}) {
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
<div className="grid grid-cols-2 gap-x-[74px]" >
            <div className="grid place-items-center">
               <div>
               <h3 className="font-bold text-[40px] text-white">{title}</h3>
                <p className="text-[18px] text-white mt-[24px] text-justify">{content} </p>
               </div>
            </div>
<div className="rounded-[85px] grid place-items-center oveflow-hidden relative" style={{transform:'rotate(360deg)'}}>
                <div className={inView ? "animate__animated animate__backInRight animate__slow relative bg-[#000709] rounded-[85px]": 'relative bg-[#000709] rounded-[85px]'} ref={targetRef}>
                <img src={image} alt="options" />
                </div>
            </div>
            
        </div>
    )
}