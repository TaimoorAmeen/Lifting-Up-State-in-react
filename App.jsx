import { useState, useTransition } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
const App = () => {
  const [user, setUser] = useState('');
  return(
    <>
      <AddUser setUser={setUser}/>
      <DisplayUser user={user}/>
    </>
  )
}

export default App;
