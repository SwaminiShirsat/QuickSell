import backlog_img from '../Icons/icons_FEtask/Backlog.svg';
import todo_img from '../Icons/icons_FEtask/To-do.svg';
import inprogress_img from '../Icons/icons_FEtask/in-progress.svg';
import done_img from '../Icons/icons_FEtask/Done.svg';
import canceled_img from '../Icons/icons_FEtask/Cancelled.svg';
import urgent_img from '../Icons/icons_FEtask/SVG - Urgent Priority colour.svg';
import high_img from '../Icons/icons_FEtask/Img - High Priority.svg';
import medium_img from '../Icons/icons_FEtask/Img - Medium Priority.svg';
import low_img from '../Icons/icons_FEtask/Img - Low Priority.svg';
import nopriority_img from '../Icons/icons_FEtask/No-priority.svg';

export const groupTickets = (tickets, users, groupBy, sortOrder) => {
    const grouped = {};
  
    if (groupBy === 'status') {
      grouped['Backlog'] = [];
      grouped['Todo'] = [];
      grouped['In progress'] = [];
      grouped['Done'] = [];
      grouped['Canceled'] = [];
    }
  
    tickets.forEach(ticket => {
      let key;
      switch (groupBy) {
        case 'status':
          key = ticket.status;
          break;
        case 'user':
          const user = users.find(u => u.id === ticket.userId);
          key = user ? user.name : 'Unassigned';
          break;
        case 'priority':
          key = getPriorityLabel(ticket.priority);
          break;
        default:
          key = 'Other';
      }
  
      if (!grouped[key]) {
        grouped[key] = [];
      }
  
      grouped[key].push(ticket);
    });
  
    const priorityOrder = ['No priority', 'Urgent', 'High', 'Medium', 'Low'];
  
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (sortOrder === 'priority') {
          const priorityA = priorityOrder.indexOf(getPriorityLabel(a.priority));
          const priorityB = priorityOrder.indexOf(getPriorityLabel(b.priority));
          return priorityA - priorityB;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });
  
    if (groupBy === 'priority') {
      const orderedGrouped = {};
      priorityOrder.forEach(priority => {
        if (grouped[priority]) {
          orderedGrouped[priority] = grouped[priority];
        }
      });
      return orderedGrouped;
    }
  
    return grouped;
  };
  
  
  export const getPriorityLabel = (priority) => {
    switch (priority) {
      case 4: return 'Urgent';
      case 3: return 'High';
      case 2: return 'Medium';
      case 1: return 'Low';
      default: return 'No priority';
    }
  };
  
  export const getPriorityImg = (status) => {
    switch (status.toLowerCase()) {
      case 'urgent' : return urgent_img;
      case 'high': return  high_img;
      case 'medium': return medium_img;
      case 'low': return low_img;
      case 'no priority': return nopriority_img
       ;
      default: return;
    }
  };

  
  export const getStatusImg = (status) => {
    switch (status.toLowerCase()) {
      case 'backlog' : return backlog_img;
      case 'todo': return  todo_img;
      case 'in progress': return inprogress_img;
      case 'done': return done_img;
      case 'canceled': return canceled_img ;
      default: return;
    }
  };
  
