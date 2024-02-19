import { useState } from "react"


export default function Home() {
  let [count, setCount] = useState(0)

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="h-[30%] w-[30%] border border-black flex  flex-col justify-center items-center gap-10">
      <h1 className=" text-3xl mb-10">Home</h1>
      {count}
      <button onClick={() => setCount(count + 1)}>incremente</button>
      <button onClick={() => { if(count > 0) setCount(count - 1) }}>decremente</button>
     
      </div>
      
        
    </section>
  )
}
