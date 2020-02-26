import React from 'react';
import './App.css';
import Members from './components/members';
import MemberForm from './components/memberForm';

function App() {
  return (
    <div>
      <MemberForm />
      <Members />
    </div>
  );
}

export default App;
