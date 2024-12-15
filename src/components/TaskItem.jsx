// components/TaskItem.jsx
import React, { useState } from 'react';

function TaskItem({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(task.id, { title: editedTitle });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.status}`}>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span className="task-title">{task.title}</span>
          <div className="task-actions">
            <select
              value={task.status}
              onChange={(e) => onUpdate(task.id, { status: e.target.value })}
            >
              <option value="planned">Planned</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;