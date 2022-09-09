import { useState } from 'react';
import { useFetchUsers } from './hooks/useFetchUsers';
import './App.scss';

export const App = () => {
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();
  console.log(userList)


  return (
    <div className="App">
      <button onClick={onClickFetchUser}>
        ユーザー取得
      </button>

      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {isLoading ? (
        <p>データ取得中です</p>
      ) : (userList.map(user => (
        <p key={user.id}>{`${user.id}: ${user.name}（${user.age}）`}</p>
      )))}
    </div>
  );
}

export default App;
