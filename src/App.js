import './App.css';
import { FrontSection, NavBar, Options, SuccessStories, Talents } from './components';
import { Options2 } from './components/Options2';
import Zoom from 'react-reveal/Zoom';

function App() {
  return (
    <div className='bg-mine'>
      <NavBar />
      <FrontSection />
      <div className='p-[80px] bg-mine flex flex-col gap-y-[80px]' style={{transform:'translateY(-7px)'}}>
        <Options image={'/images/pics1.svg'} title={'Upskill on the go'} content={"In today's fast-paced world, staying relevant and up-to-date with the latest skills and knowledge is crucial for personal and professional growth. "} />
       <div className='p-[80px] bg-mine flex flex-col gap-y-[80px]'>
       <Options2 image={'/images/pics2.svg'} title={'Land your dream job'} content={"At Synergy, we believe that your work should be more than just a job; it should be a fulfilling and rewarding experience. That's why we go the extra mile to match you with opportunities that align with your skills, passions, and aspirations.  "} />
       </div>
        <div className='p-[80px] bg-mine flex flex-col gap-y-[80px]'>
        <Options image={'/images/pics3.svg'} title={'Join Exciting Circles'} content={"Stay continuously informed and in sync with your peers on topics that ypu are interested in. Engage with like-minded individuals and professionals within your industry."} />
        </div>
      </div>
      <SuccessStories />
      <Talents />
      <div className='px-[80px] py-[143.5px] bg-mine grid place-items-center'>
       <Zoom>
       <h3 className='font-semibold text-[40px] text-[#EFF4F580] text-center mb-[64px]'>One Platform.  <span className='text-white'>Everything you need</span></h3>
       </Zoom>
<div className='grid grid-cols-4 gap-[16px] w-full'>
  <div>
  <div className='px-[80px] h-[220px] bg-[#00212D]' style={{borderRadius:'4px 4px 0 0'}}></div>
  <p className='font-semibold text-[16px] text-white mt-[32px] text-center'>Learn a New skill</p>
  </div>
  <div>
  <div className='px-[80px] h-[220px] bg-[#00212D]' style={{borderRadius:'4px 4px 0 0'}}></div>
  <p className='font-semibold text-[16px] text-white mt-[32px] text-center'>Find Top Jobs</p>
  </div>
  <div>
  <div className='px-[80px] h-[220px] bg-[#00212D]' style={{borderRadius:'10px 10px 0 0'}}></div>
  <p className='font-semibold text-[16px] text-white mt-[32px] text-center'>Connect With Friends</p>
  </div>
  <div>
  <div className='px-[80px] h-[220px] bg-[#00212D]' style={{borderRadius:'4px 4px 0 0'}}></div>
  <p className='font-semibold text-[16px] text-white mt-[32px] text-center'>Enjoy exciting rewards</p>
  </div>
  

</div>
      </div>

      <div className='px-[80px] pt-[120px] pb-[126px]'>
        <div className='px-[48px] py-[106px] rounded-[40px] relative overflow-hidden' style={{background:'linear-gradient(125deg, #F97D01 0%, #D37D27 45.29%, #DF6962 100%, #FF4C42 100%)'}}>
          <div className='w-[50%]'>
          <h4 className='font-bold text-[33px]'>Like what you see? There’s <br/>more on the app</h4>
          <p className='font-medium mt-[8px]'>Take control of your career journey and tap into a world of opportunities with the Synergy mobile app. </p>
          <div className="flex items-center gap-x-[21.32px] mt-[48px]">
                    <button className="flex items-center gap-x-[16px] text-[13px] font-medium px-[24px] py-[14.22px] text-white rounded-[8px] bg-mine">
                        <img src="/images/apple.svg" alt="apple" />
                        Get on Iphone
                    </button>
                    <button className="flex items-center gap-x-[16px] text-[13px] font-medium px-[24px] py-[14.22px] text-white rounded-[8px] bg-mine">
                        <img src="/images/google-play.svg" alt="apple" />
                        Get on Android
                    </button>
                </div>
          </div>
          <img src='/images/ambassadors.svg' alt='ambassadors' className='absolute right-0 bottom-0 h-[365px] w-[630px]' />
        </div>
      </div>
      <footer className='pt-[91.5px] px-[80px]'>
        <div className='flex justify-between'>
<div className='flex gap-x-[154px]'>
  <div>
    <img src='/images/synergy-logo.svg' alt='logo' />
  </div>
  <div className='flex gap-x-[80px]'>
    <div>
      <p className='font-semibold text-[16px] text-white'>Company</p>
      <p className='font-medium text-[14px] text-white opacity-70 mt-[20px]'>FAQ's</p>
      <p className='font-medium text-[14px] text-white opacity-70 mt-[18px]'>Contact us</p>
    </div>
    <div>
    <p className='font-semibold text-[16px] text-white'>Resources</p>
      <p className='font-medium text-[14px] text-white opacity-70 mt-[20px]'>Job Board</p>
      <p className='font-medium text-[14px] text-white opacity-70 mt-[18px]'>Community</p>
    </div>
    <div>
    <p className='font-semibold text-[16px] text-white'>Legal</p>
      <p className='font-medium text-[14px] text-white opacity-70 mt-[20px]'>Privacy policy</p>
      <p className='font-medium text-[14px] text-white opacity-70 mt-[18px]'>Terms & conditions</p>
    </div>
  </div>
</div>
<div>
  <div className='flex gap-x-[16px]'>
    <img src='/images/twitter-white.svg' alt='socials' className='ml-auto' />
    <img src='/images/linkedin-white.svg' alt='socials' />
    <img src='/images/instagram-white.svg' alt='socials' />
  </div>
  <p className='font-medium text-[14px] text-white opacity-50 mt-[20px] text-right'>2A Osara Close, Maitama, Abuja</p>
  <p className='mt-[18px] font-medium text-[14px] text-white opacity-50 text-right'>Hello@synergyng.com</p>
</div>
        </div>
      </footer>
<div className='mt-[80.5px] text-center py-[40px]' style={{borderTop:'1px solid #334D57'}}>
  <small className='text-[16px] text-[#667A81] text-center'>© Copyright Synergy 2023. All rights reserved!</small>
</div>
    </div>
  );
}

export default App;
