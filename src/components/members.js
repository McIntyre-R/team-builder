import React from "react";

const Members = props => {
  return (
    <div>
      {props.members.map(members => (
        <div key={members.id}>
          <h2>{members.name}</h2>
          <p>{members.email}</p>
          <p>{members.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;

