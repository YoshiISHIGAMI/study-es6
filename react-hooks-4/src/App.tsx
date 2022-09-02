import { useState } from 'react';
import './_styles/App.scss';
import { Card } from './_component/card';

export const App = () => {

  // 管理者フラグ
  const [isAdimn, setIsAdmin] = useState(false)

  // 切り替え
  const onClickSwitch = () => setIsAdmin(!isAdimn)


  return (
    <div className="App">
      {isAdimn ? '管理者です' : '管理者ではありません'}
      <p>
        <button onClick={onClickSwitch}>切り替え</button>
      </p>
      <Card isAdimn={isAdimn} />
    </div>
  );
}