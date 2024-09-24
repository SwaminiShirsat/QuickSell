import { useState, useEffect } from 'react';

// Custom hook to manage view state with localStorage
export const useViewState = (defaultView = 'status') => {
  const [view, setView] = useState(() => localStorage.getItem('viewState') || defaultView);

  const changeView = (newView) => {
    setView(newView);
    localStorage.setItem('viewState', newView);
  };

  useEffect(() => {
    const savedView = localStorage.getItem('viewState');
    if (savedView) {
      setView(savedView);
    }
  }, []);

  return [view, changeView];
};
