import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import TaskList from './TaskList';

const Home = () => {
  const { task, setTask, addTask, filter, setFilter, theme, setTheme } = useContext(GlobalContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo-area">
          <h1>Task Manager</h1>
          <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'light' ? '🌙 ' : '☀️'}
          </button>
        </div>

        <section className="form-group">
          <label>TASK TITLE</label>
          <input 
            type="text" 
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            placeholder="What needs to be done?"
          />
        </section>

        <section className="form-group">
          <label>DESCRIPTION</label>
          <textarea 
            rows={4}
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            placeholder="Add some details..."
          />
        </section>

        <button className="btn-primary" onClick={addTask} 
        disabled={!task.title.trim() || !task.description.trim()}>
          Create Task
        </button>

        <section className="form-group" style={{marginTop: 'auto'}}>
          <label>VIEW FILTER</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All Projects</option>
            <option value="Pending">🚧 Pending</option>
            <option value="Completed">✅ Completed</option>
          </select>
        </section>
      </aside>

      {/* MAIN: Task Feed */}
      <main className="main-content">
        <header style={{marginBottom: '20px'}}>
          <h2 style={{fontSize: '1.8rem'}}>{filter} Tasks</h2>
          <p style={{opacity: 0.6}}>Organize your day, one task at a time.</p>
        </header>
        <TaskList />
      </main>
    </div>
  );
};

export default Home;