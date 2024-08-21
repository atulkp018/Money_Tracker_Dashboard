import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <>
    
        <div className="w-full flex">
          <NavigationBar />
          <main className="grow">
            <Dashboard />
          </main>
        </div>
    </>
  );
}

export default App;
