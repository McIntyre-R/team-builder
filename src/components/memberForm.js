import React, { useState } from "react";

const MemberForm = props => {

  const [member, setMember] = useState({
   
  });

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(note)
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({})
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"> note title</label>
      <input id='title' type='text' name='title' onChange={handleChanges} placeholder='note title' value={note.title} />
      <label htmlFor="note"> note body</label>
      <textarea id='note' name='body' onChange={handleChanges} placeholder='note body' value={note.body}/>
      <button type="submit"> Add Note </button>
    </form>
  ) 
};

export default MemberForm;
