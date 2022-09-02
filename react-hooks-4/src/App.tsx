import { useContext } from 'react';
import { AdminFlagContext } from './_component/providers/AdminFlagProvider';
import { Card } from './_component/card';
import './_styles/App.scss';

export const App = () => {

  // 管理者フラグ
  const { isAdimn, setIsAdmin } = useContext(AdminFlagContext)

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