import React from 'react';

const dashboard = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="h-full">
        Sidebar
      </div>
      <div className="h-full">
        Main Body
      </div>
      <div>
        Sidebar 2
      </div>
    </div>
  );
}

export default dashboard;