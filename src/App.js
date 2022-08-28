import React from 'react';
import Joblistings from './components/Joblistings';
import  data from './data.json';

function App() {
  return (
      <div className="h-screen w-full">
        <div className="h-36 w-full bg-pattern bg-blue-200">
          <div className="sm:w-2/3 w-3/4 h-full mr-auto ml-auto pt-52">
            <Joblistings Data={data}/>
          </div>
        </div>
      </div>
  );
}

export default App;
