import './App.css'
import Silk from '@/components/Silk'

function App() {

  return (
    <>
      <div className="bg-blue-500 min-h-screen flex-col align-text-top flex items-center">
        Adnan Roomieh
        <Silk
          speed={5}
          scale={1}
          color="#0a0f9e"
          noiseIntensity={0.8}
          rotation={4.3}
        />
      </div>
    </>
  )
}

export default App
