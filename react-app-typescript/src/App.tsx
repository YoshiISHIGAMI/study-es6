import { useEffect, useState } from 'react';
import { ListItem } from './ components/ListItem';
import axios from 'axios';
import './App.scss';
import { User } from './types/user';


export const App = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    axios.get<User[]>('./test.json').then((res) => {
      console.log('axios')
      console.log(res)
      setUsers(res.data)
    })
  }, [])

  return (
    <div className="App">
      {users.map(user => (
        <ListItem id={user.id} name={user.name} age={user.age} personalColor={user.personalColor} />
      ))}
    </div>
  );
}

export default App;
