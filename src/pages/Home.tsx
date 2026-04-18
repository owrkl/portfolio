import './Pages.css'
import Silk from '@/components/Silk'
import BubbleMenu from '@/components/BubbleMenu'
import TextType from '@/components/TextType';
import Carousel from '@/components/Carousel'
import { BubbleItems } from '@/constants/Bubbleitems';

function Home() {
  return (
    <>
      <div className="fixed w-full h-screen overflow-hidden backdrop-blur-3xl">
        <Silk
          speed={5}
          scale={1}
          color="#3b82f6"
          noiseIntensity={0.8}
          rotation={4.3}
        />
        <div className="absolute inset-0 backdrop-blur-lg bg-black/20 z-5" />
      </div>
      <div className='absolute w-full flex flex-col py-25 justify-center text-center'>
        <TextType
          text={["Full-stack developer", "AI power-user", "Linux enthusiast"]}
          typingSpeed={150}
          pauseDuration={1500}
          showCursor
          cursorCharacter="▎"
          cursorBlinkDuration={0.5}
          className='text-[50px]'
        />
        <div className='flex items-center justify-center'>
          <Carousel
            baseWidth={700}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
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
          animationDuration={0.8}
          staggerDelay={0.12}
        />
      </div>
    </>
  )
}

export default Home;
