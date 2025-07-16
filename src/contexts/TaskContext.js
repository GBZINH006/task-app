import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [history, setHistory] = useState([]);

    const addTask = (title) => {
        const newTask = {
            id: Date.now().toString(),
            title,
        };
        setTasks((prev) => [...prev, newTask]);
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const finishTask = (task, duration) => {
        setTasks((prev) => prev.filter((t) => t.id !== task.id));
        setHistory((prev) => [...prev, { ...task, finished: true, duration }]);
    };

    return (
        <TaskContext.Provider value={{ tasks, history, addTask, deleteTask, finishTask }}>
            {children}
        </TaskContext.Provider>
    );
};
