import { useState,useEffect } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    
  })
  console.log("Counter component re-rendered")

  return (
    <>
      <button
        onClick={() => setCount(count + 1)}
      >
        Count {count}
      </button>
    </>
  )
}

export default Counter