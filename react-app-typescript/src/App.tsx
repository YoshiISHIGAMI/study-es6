import { useEffect, useState } from 'react';
import { ListItem } from './ components/ListItem';
import axios from 'axios';
import './App.scss';

type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
}

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
        <ListItem id={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default App;
