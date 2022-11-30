import './App.css';
import React from "react";
import { UserName } from './components/Username';

export const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value='Fausto'>
      <UserName/>
    </UserContext.Provider>
  );
}


export default App;
