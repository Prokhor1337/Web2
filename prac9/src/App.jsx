import { useState } from "react";
import "./App.css";

export default function App() {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("All");

    const addTask = () => {
        if (!text.trim()) return;
        setTasks([...tasks, { id: Date.now(), text, done: false }]);
        setText("");
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(t =>
            t.id === id ? { ...t, done: !t.done } : t
        ));
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === "Active") return !task.done;
        if (filter === "Done") return task.done;
        return true;
    });

    return (
        <div className="app">
            <h1>Mini ToDo</h1>
            <div className="input-container">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Введіть задачу..."
                />
                <button onClick={addTask}>Add</button>
            </div>
            
            <div className="filters">
                <button onClick={() => setFilter("All")}>All</button>
                <button onClick={() => setFilter("Active")}>Active</button>
                <button onClick={() => setFilter("Done")}>Done</button>
            </div>

            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>
                        <span
                            onClick={() => toggleTask(task.id)}
                            style={{ textDecoration: task.done ? "line-through" : "none" }}
                        >
                            {task.text}
                        </span>
                        <button className="remove-btn" onClick={() => removeTask(task.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
