"use client";

import React, { createContext, useState, useContext } from "react";
import themes from "./theme";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

export const GlboalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProdiver = ({ children }) => {
    const { user }  = useUser();
    const [selectedTheme, setSelectedTheme] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const [tasks, setTasks] = useState([]);

    const theme = themes[selectedTheme];

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    }

    const collapseMenu = () => {
        setCollapsed(!collapsed);
    }


    const allTasks = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get("/api/tasks");
            const sorted = res.data.sort((a, b) => {
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            })
            setTasks(sorted);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async (id) => {
        try {
            const res = await axios.delete(`/api/tasks/${id}`);
            toast.success("Task deleted successfully");

            allTasks();
            
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong");
        }
    }

    const updateTask = async task => {
        try {
            const res = await axios.put("/api/tasks", task);

            toast.success("Task updated successfully");

            allTasks();
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    }


    const completedTasks = tasks.filter((task) => task.isCompleted === true);
    const incompletedTasks = tasks.filter((task) => task.isCompleted === false);
    const importantTasks = tasks.filter((task) => task.isImportant === true);



    React.useEffect(() => {
        if (user) allTasks();
    }, [user]);


    return (
        <GlboalContext.Provider value={{ 
            theme, 
            tasks,
            deleteTask,
            updateTask, 
            allTasks,
            isLoading,
            completedTasks,
            incompletedTasks,
            importantTasks,
            openModal,
            closeModal,
            modal,
            collapsed,
            collapseMenu, 
            }}>
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlboalContext.Provider>
    );
}

export const useGlobalState = () => useContext(GlboalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
