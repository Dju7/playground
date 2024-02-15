import { useState } from "react"

function TodoInput() {
  const [task, setTask] = useState("")
  const [items, setItems] = useState ([])

  const addItem = () => {
    if (!task) {
        alert("you have to add an item");
        return;
      }
  
  const newTask = {
    id: Math.floor(Math.random() * 100),
    value: task,
  }
  setItems((prevList) => [...prevList, newTask]);
  window.localStorage.setItem(newTask.id, newTask.value)
  setTask("")
  }
  const deleteItem= (id) => {
    const newArray = items.filter((item) => item.id !== id);
  setItems(newArray);
  window.localStorage.removeItem(id)
  }


  return (
    <>
    <div className="flex justify-center items-center">
    <input
      type="text"
      placeholder="add task here"
      className="h-12 w-72 p-2"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      />
        <button 
        className="h-12 w-28 bg-yellow-500 text-white text-2xl"
        onClick={()=> addItem()}
        >
          Add
        </button>
    </div>
    <ul className="mt-14 flex flex-col gap-4">
            {(items.map((item) => {
                    return(
                        <li key={item.id} className="flex justify-between h-8 w-[500px] text-gray-500   bg-white font-bold ">{item.value} <button className="ml-5 cursor-pointer font-bold w-8 " onClick={() => deleteItem(item.id)}> X </button></li>
                    )
                })
               ) 
           }

       </ul>
    </>
  )
}

export default TodoInput




