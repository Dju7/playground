import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className=' absolute h-screen w-56 bg-gray-700 flex flex-col justify-center items-center text-yellow-500'>
      <h1 className=" text-3xl">PlayGround</h1>
      <div className="w-full h-[90%] flex flex-col justify-center items-center gap-4 ">
      <Link to="/">Home</Link>
      <Link to="/todo">Todo List</Link>
      <Link to="/calendar">Calendrier</Link>
      <Link to="/mastermind">Mastermind</Link>
      </div>

    </nav>
  )
}
