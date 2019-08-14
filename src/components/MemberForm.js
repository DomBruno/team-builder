import React, { useState } from "react";

const MemberForm = props => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  })

  const changeHandler = event => {
      setMember({...member, [event.target.name]: event.target.value});
    }

  const submitForm = event => {
    event.preventDefault();
    const newMember = {
      ...member, 
          };
    props.addNewMember(newMember);
  };

  return (
  <form onSubmit={submitForm}>
    <label htmlFor="name">Member Name</label>
    <input 
    id="name" 
    type="text" 
    name="name" 
    placeholder="Member Name" 
    onChange={changeHandler} 
    value={member.name}/>
   <label htmlFor="name">Member Email</label>
    <input 
    id="email" 
    type="text" 
    name="email" 
    placeholder="Member Email" 
    onChange={changeHandler} 
    value={member.email}/>
    <label htmlFor="name">Member Role</label>
    <input 
    id="role" 
    type="text" 
    name="role" 
    placeholder="Member Role" 
    onChange={changeHandler} 
    value={member.role}/>
    <button type="submit">Add Member</button>
  </form>
  );
};

export default MemberForm;