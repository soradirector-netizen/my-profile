import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (event) => {
    event.preventDefault();

    const text = input.trim();

    if (text === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: text,
        done: false,
      },
    ]);

    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold">
        タスク管理アプリ
      </h1>

      <form onSubmit={addTask} className="mt-6 flex gap-2">
        <input
          className="border rounded px-3 py-2 flex-1"
          placeholder="新しいタスクを入力..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          追加
        </button>
      </form>

      <p className="mt-4">
        タスク数：{tasks.length}
      </p>

      <ul className="mt-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border-b py-2 flex items-center justify-between"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${
                task.done ? "line-through text-gray-400" : ""
              }`}
            >
              {task.done ? "✓ " : "□ "}
              {task.text}
            </span>

            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 ml-4"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;