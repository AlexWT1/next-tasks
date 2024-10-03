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

    const [tasks, setTasks] = useState([]);

    const theme = themes[selectedTheme];

    const allTasks = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get("/api/tasks");

            setTasks(res.data);
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


    React.useEffect(() => {
        if (user) allTasks();
    }, [user]);
    return (
        <GlboalContext.Provider value={{ theme, tasks,deleteTask, isLoading }}>
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlboalContext.Provider>
    );
}

export const useGlobalState = () => useContext(GlboalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
