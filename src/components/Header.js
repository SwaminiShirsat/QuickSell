
import React, { useState } from 'react';
import './Header.css';
import { ReactComponent as DisplayIcon } from '../Icons/icons_FEtask/Display.svg';
import { ReactComponent as DownIcon } from '../Icons/icons_FEtask/down.svg';

function Header({ groupBy, setGroupBy, sortOrder, setSortOrder }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleGroupByChange = (event) => {
    const newGroupBy = event.target.value;
    setGroupBy(newGroupBy);
    localStorage.setItem('groupBy', newGroupBy); 
  };

  const handleSortOrderChange = (event) => {
    const newSortOrder = event.target.value;
    setSortOrder(newSortOrder);
    localStorage.setItem('sortOrder', newSortOrder); 
  };

  return (
    <header className="app-header">
      <div className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <DisplayIcon />
        <span><b>Display</b></span>
        <DownIcon />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select value={groupBy} onChange={handleGroupByChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select value={sortOrder} onChange={handleSortOrderChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;