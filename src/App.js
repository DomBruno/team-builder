import React, {useState} from 'react';
import logo from './meme.jpg';
import './App.css';
import ReactDOM from "react-dom";

import Members from "./components/Members";
import MemberForm from "./components/MemberForm";
import data from "./data";

function App() {
  const [members, setMembers] = useState(data);

  const addNewMember = member => {
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" />
        <h1>Dom's Team Builder</h1>
        <MemberForm addNewMember={addNewMember} />
        <Members memberList={members} />
      </header>
    </div>
  );
}

export default App;
