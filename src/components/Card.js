import React from 'react';
import { getPriorityImg } from '../utils/ticketUtils'; 
import { getPriorityLabel } from '../utils/ticketUtils';
import './Card.css';

function TicketCard({ ticket, user }) {
  const priorityLabel = getPriorityLabel(ticket.priority); 
  const priorityIcon = getPriorityImg(priorityLabel); 

  return (
    <div className="ticketcard">
      <div className="ticketheader">
        <span className="ticketid">{ticket.id}</span>
        {user && (
          <div className="user" title={user.name}>
            {user.name[0].toUpperCase()}
          </div>
        )}
      </div>
      <div className="tickettitle">
        <span>{ticket.title}</span>
      </div>
      <div className="ticketfooter">
        <span className="priorityicon" title={`Priority ${priorityLabel}`}>
          {priorityIcon && (
            <img src={priorityIcon} alt={`Priority ${priorityLabel}`}  />
          )}
        </span>
        <div className="tickettags">
          {ticket.tag.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
