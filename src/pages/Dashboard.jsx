import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]); // for tasks
  const [newTask, setNewTask] = useState({ title: "", description: "" }); // for input fields
  const [loading, setLoading] = useState(true); // for loading
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchTasks();
    }
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(
        "https://taskerapp-backend-production.up.railway.app/api/tasks"
      );
      setTasks(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const handleCreate = async () => {
    if (!newTask.title) return;
    try {
      await axios.post(
        "https://taskerapp-backend-production.up.railway.app/api/tasks",
        newTask
      );
      setNewTask({ title: "", description: "" });
      fetchTasks();
    } catch (err) {
      alert("Failed to create task");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://taskerapp-backend-production.up.railway.app/api/tasks/${id}`
      );
      fetchTasks();
    } catch (err) {
      alert("Failed to delete task");
    }
  };

  const handleToggleStatus = async (task) => {
    try {
      await axios.put(
        `https://taskerapp-backend-production.up.railway.app/api/tasks/${task._id}`,
        {
          ...task,
          status: task.status === "pending" ? "done" : "pending",
        }
      );
      fetchTasks();
    } catch (err) {
      alert("Failed to update status");
    }
  };

  const handleEdit = (task) => {
    setEditingTaskId(task._id);
    setNewTask({ title: task.title, description: task.description });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://taskerapp-backend-production.up.railway.app/api/tasks/${editingTaskId}`,
        newTask
      );
      setEditingTaskId(null);
      setNewTask({ title: "", description: "" });
      fetchTasks();
    } catch (err) {
      alert("Failed to update task");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="border p-2 w-1/3"
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          className="border p-2 w-1/2"
        />
        {editingTaskId ? (
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4"
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleCreate}
            className="bg-blue-500 text-white px-4"
          >
            Add
          </button>
        )}
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="mb-4 p-4 border rounded shadow">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => handleToggleStatus(task)}
                className="bg-yellow-500 rounded-md text-white px-3 py-1"
              >
                Change Status
              </button>
              <button
                onClick={() => handleEdit(task)}
                className="bg-green-600 rounded-md text-white px-3 py-1"
              >
                Edit Msg
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="bg-red-600 text-white rounded-md px-3 py-1"
              >
                Delete Task
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
