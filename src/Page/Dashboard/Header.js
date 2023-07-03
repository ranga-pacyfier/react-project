import React from 'react';
import Dashboard from '.';

function Header({ setIsAdding, setIsPayroll, setIsScheduler }) {
  const handleOpenPayroll = () => {
    setIsPayroll(true);
  };

  const handleOpenScheduler = () => {
    setIsScheduler(true); // Set isScheduler state to open the scheduler
  };


  return (
    <header>
      <h1>Employee Management Software</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)} className='round-button'>Add Employee</button>
        <button onClick={handleOpenPayroll} className='round-button'>Open Payroll</button>
        <button onClick={handleOpenScheduler} className='round-button'>Add Schedule</button>
        {/* <button onClick={Dashboard} className='round-button'>Back to Dashboard</button> */}
      </div>
    </header>
  );
}

export default Header;
