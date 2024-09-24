import React from 'react';

function DisplayOptions({ setGroupBy, setSortOrder }) {
  return (
    <div className="display-options">
      <label>
        Group By:
        <select onChange={e => setGroupBy(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </label>
      <label>
        Sort By:
        <select onChange={e => setSortOrder(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </label>
    </div>
  );
}

export default DisplayOptions;