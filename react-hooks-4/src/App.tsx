import { useState } from 'react';
import logo from './logo.svg';
import './_styles/App.scss';
im

export const App = () => {

  // 管理者フラグ
  const [isAdimn, setIsAdmin] = useState(false)

  // 切り替え
  const onClickSwitch = () => setIsAdmin(!isAdimn)


  return (
    <div className="App">
      {isAdimn ? '管理者です' : '管理者ではありません'}
      <button onClick={onClickSwitch}>切り替え</button>
    </div>
  );
}