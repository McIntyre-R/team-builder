import React, {useState} from 'react';
import Members from './components/members';
import MemberForm from './components/memberForm';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Ronald McIntyre',
      email: 'r.campbell.mcintyre@gmail.com',
      role: 'Front End Developer'    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember])
  }
  return (
    <div>
      <MemberForm addNewMember = {addNewMember} />
      <Members members ={members} />
    </div>
  );
}

export default App;
