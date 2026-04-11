import './App.css'
import Silk from '@/components/Silk'
import BubbleMenu from './components/BubbleMenu'

const items = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'blog',
    href: '#',
    ariaLabel: 'Blog',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

function App() {
  return (
    <>
      <div className="absolute w-full h-screen overflow-hidde backdrop-blur-3xl">
        <Silk
          speed={5}
          scale={1}
          color="#0a0f9e"
          noiseIntensity={0.8}
          rotation={4.3}
        />
        <div className="absolute inset-0 backdrop-blur-lg bg-black/20 z-5" />
      </div>
      <div className='flex'>
        <BubbleMenu
          logo={<span style={{ fontSize: "14px", fontWeight: 700, color: "#101010" }}>Adnan Roomieh</span>}
          items={items}
          menuAriaLabel="Toggle navigation"
          menuBg="#cdcdcd"
          menuContentColor="#101010"
          useFixedPosition={false}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
        <strong className='text-white'>My Portfolio</strong>
      </div>
    </>
  )
}

export default App
