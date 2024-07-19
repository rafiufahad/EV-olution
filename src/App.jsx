import { useEffect, useState } from "react"
import Background from "./Components/Background/Background";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";



const App = () => {

  const heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give in", text2: "your passions"},
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);


  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{
        return count === 2 ? 0 : count+1
      })
    }, 3000);
  }, [])


  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <NavBar />
      <Hero 
        setPlayStatus = {setPlayStatus}
        heroData = {heroData[heroCount]}
        heroCount = {heroCount}
        setHeroCount = {setHeroCount}
        playStatus = {playStatus}
      />
    </div>
  )
}

export default App