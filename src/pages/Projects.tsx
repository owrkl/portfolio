import './Pages.css'
import Silk from "@/components/Silk";
import BubbleMenu from "@/components/BubbleMenu";
import { BubbleItems } from "@/constants/Bubbleitems";

function Projects() {
  return (
    <>
      <div className="fixed w-full h-screen overflow-hidden backdrop-blur-3xl">
        <Silk
          speed={5}
          scale={1}
          color="#f59e0b"
          noiseIntensity={0.8}
          rotation={4.3}
        />
        <div className="absolute inset-0 backdrop-blur-lg bg-black/20 z-5" />
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

export default Projects;
