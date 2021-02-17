import React from 'react';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-20 w-20" src="http://placekitten.com/400/400" alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-blue">My lovely cat</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, molestias.</p>
      </div>
    </div>
  );
};

export default App;
