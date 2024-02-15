import TodoInput from "./todoInput";


export default function TodoContainer() {
  return (
    <div className="min-h-[80%] w-[70%] bg-gray-700 flex flex-col  items-center gap-10">
        <h1 className="text-4xl text-yellow-500">Todo List</h1>
        <TodoInput />
        

      
    </div>
  )
}
