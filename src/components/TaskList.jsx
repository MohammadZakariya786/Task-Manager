import React, { memo, useContext, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const TaskList = () => {
  const { taskList, deleteTask, toggleTask, filter } = useContext(GlobalContext);
  const [removingIds, setRemovingIds] = React.useState([]);

  const filteredTasks = useMemo(() => {
    return taskList.filter(task => {
      if (filter === "Completed") return task.completed;
      if (filter === "Pending") return !task.completed;
      return true;
    });
  }, [taskList, filter]);

  const handleDelete = (id) => {
    setRemovingIds(prev => [...prev, id]);
    setTimeout(() => {
      deleteTask(id);
      setRemovingIds(prev => prev.filter(rid => rid !== id));
    }, 300);
  };

  if (taskList.length === 0) {
    return <p className="task-card">No tasks added yet 🚀 Start by creating one above!</p>;
  }


  
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            {filteredTasks.map((item, index) => (
              <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{ ...provided.draggableProps.style }}
                  >
                    <div className={`task-card ${item.completed ? 'completed' : ''} ${removingIds.includes(item.id) ? 'removing' : 'adding'}`}>
                      <div className="task-actions">
                        <button className="icon-btn" onClick={() => toggleTask(item.id)} title="Toggle Status">
                          {item.completed ? "↩️" : "✅"}
                        </button>
                        <button className="icon-btn" onClick={() => handleDelete(item.id)} title="Delete Task">
                          ❌
                        </button>
                      </div>

                      <div style={{paddingTop: '1px'}}>
                        <h3>{item.title}</h3>
                        <p style={{opacity: 0.7, fontSize: '0.95rem'}}>{item.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default memo(TaskList);