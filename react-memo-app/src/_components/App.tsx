import { ChangeEvent, useState, FC, memo } from 'react';
import '../_sass/App.scss';

export const App: FC = () => {

  // text box State
  const [text, setText] = useState<string>("")
  // note list State
  const [memos, setMemos] = useState<string[]>([])

  // Set input contents to State
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)

  //  Add memo 
  const onClickAdd = () => {

    const newMemos = [...memos]
    newMemos.push(text)
    setMemos(newMemos)
    setText("")
  }

  const onClickDelete = (index: number) => {
    const newMemos = [...memos]
    newMemos.splice(index, 1)
    setMemos(newMemos)
  }

  return (
    <div className="App">
      <h1>
        simple note app
      </h1>

      <p className='add-note'>
        <input className='input-note' type="text" />
        <button className='button'>追加</button>
      </p>

      <div className='note_list'>
        <h2>
          notes list
        </h2>
        <ul>
          <li>メモ1 <button>削除</button></li>
        </ul>
      </div>
    </div>
  );
}

export default App