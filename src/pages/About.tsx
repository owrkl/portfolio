import './Pages.css'
import Silk from "@/components/Silk";
import BubbleMenu from "@/components/BubbleMenu";
import { BubbleItems } from "@/constants/Bubbleitems";

function About() {
  return (
    <>
      <div className="fixed w-full h-screen overflow-hidden backdrop-blur-3xl">
        <Silk
          speed={5}
          scale={1}
          color="#10b981"
          noiseIntensity={0.8}
          rotation={4.3}
        />
        <div className="absolute inset-0 backdrop-blur-lg bg-black/20 z-5" />
      </div>
      <div className='absolute h-full w-full flex flex-col pt-25 items-center text-center'>
        <div class='rectangle' className='absolute h-[40%] w-[95%] bg-[rgba(255,_255,_255,_0.08)] backdrop-filter backdrop-blur-md rounded-[20px] border-[1px] border-[solid] border-[#cdcdcd]/30 [box-shadow:0_8px_32px_rgba(0,_0,_0,_0.1),_inset_0_1px_0_rgba(255,_255,_255,_0.5),_inset_0_-1px_0_rgba(255,_255,_255,_0.1),_inset_0_0_3px_3px_[#cdcdcd]] relative overflow-hidden text-[50px]'>
            {/* <div className="absolute top-0 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-white/80 to-transparent" />
            <div className="absolute top-0 left-0 w-[1px] h-full bg-linear-to-b from-white/80 via-transparent to-white/30" /> */}
            <div className='py-5 px-15 flex justify-center items-center gap-25'>
                <div className='text-left'>
                    Name: Adnan Roomieh <br />
                    OS: Arch Linux
                </div>
                <div className='text-left'>
                    Editor: NeoVim <br />
                    Focus: Full-stack & AI
                </div>
            </div>
        </div>
      </div>
      <div className='absolute flex flex-col gap-4 w-full z-90'>
        <BubbleMenu
          logo={<span style={{ fontSize: "14px", fontWeight: 700, color: "#101010" }}>Adnan Roomieh</span>}
          items={BubbleItems}
          menuAriaLabel="Toggle navigation"
          menuBg="#cdcdcd"
          menuContentColor="#101010"
          useFixedPosition={true}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
      </div>
    </>
  )
}

export default About;
