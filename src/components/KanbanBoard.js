
import React from 'react';
import Column from './Col';
import { groupTickets, getStatusImg } from '../utils/ticketUtils';
import './KanbanBoard.css';

function KanbanBoard({ tickets, users, groupBy, sortOrder }) {
  const groupedTickets = groupTickets(tickets, users, groupBy, sortOrder);
  const columnKeys = Object.keys(groupedTickets);

  return (
    <div className="kanban-board">
      {columnKeys.map((key) => (
        <Column
          key={key}
          title={key}
          icon={getStatusImg(key)}
          tickets={groupedTickets[key] || []}
          users={users}
          count={groupedTickets[key]?.length || 0}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;