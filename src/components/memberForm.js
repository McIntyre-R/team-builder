import React, { useState } from "react";

const MemberForm = props => {

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
        console.log(member)
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name:'', email: '', role: ''})
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name"> Name</label>
            <input id='name' type='text' name='name' onChange={handleChanges} placeholder='Name' value={member.name} />
            <label htmlFor="email"> Email</label>
            <input id='email' name='email' type='text' onChange={handleChanges} placeholder='Email' value={member.email} />
            <label htmlFor="role"> Role</label>
            <input id='role' name='role' type='text' onChange={handleChanges} placeholder='Role' value={member.role} />
            <button type="submit"> Join Team </button>
        </form>
    )
};

export default MemberForm;
