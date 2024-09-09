import { useState } from "react"


function TodoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function handleOnChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function delelteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }


    return (
        <div className="grid items-center justify-center mt-[30px]">
            <h1 className="text-3xl font-black text-center mb-4">Todo App</h1>
            <div className="flex gap-2 items-center">
                <input
                    type="text"
                    placeholder="Enter a Task..."
                    className="w-[500px] border border-black px-2 py-1 rounded-md text-xl"
                    value={newTask}
                    onChange={handleOnChange}
                />
                <button
                    className="px-4 py-2 bg-blue-400 rounded-md text-white"
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>

            <ol className="mt-3">
                {tasks.map((task, index) =>
                    <li key={index} className="flex justify-between items-center p-2 border border-b-black">
                        <span className="text-xl font-semibold">{task}</span>
                        <button
                            className="bg-red-500 px-4 py-2 rounded-md text-white"
                            onClick={() => delelteTask(index)}
                        >
                            Delete
                        </button>
                    </li>
                )}
            </ol>
        </div >
    )
}

export default TodoList
