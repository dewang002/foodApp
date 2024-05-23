import { useEffect } from "react"

function About() {
useEffect(()=>{
  const timer=  setInterval(() => {
    console.log("hello")
  }, 2000)

  return()=>{
    clearInterval(timer)
  }
},[])

  return (
    <div >
      <h1>hello this about page</h1>


    </div>
  )
}

export default About
