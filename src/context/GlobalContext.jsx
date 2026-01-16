import { createContext, useCallback, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const GlobalContext=createContext()

const GlobalProvider=({children})=>{

    const [task, setTask] = useState({
        title:'',
        description:''
    })
    const [taskList, setTaskList] = useLocalStorage("tasks", []);
    const [filter, setFilter] = useState('All')
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    const addTask=useCallback(()=>{
            setTaskList(prev =>[
                {
                    id: Date.now(),                    
                    title: task.title,
                    description: task.description,
                    completed: false
                },
                ...prev
        ]);
        setTask({title:'',description:''})
    },[task,setTaskList])

    const deleteTask =useCallback((id)=>{
        setTaskList(prev=>prev.filter(task => task.id !== id));
    },[setTaskList])
  

   const toggleTask = useCallback((id) => {
    setTaskList(prev=>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  },[setTaskList]);
    
    const value={
        task,
        setTask,
        taskList,
        addTask,
        deleteTask,
        toggleTask,
        filter,
        setFilter,
        theme,
        setTheme
    }

    return (
    <GlobalContext.Provider value={value}>
        {children}
    </GlobalContext.Provider>
    )

}

export default GlobalProvider