import { ChangeEvent, useState, FC, useCallback } from 'react';
import '../_sass/App.scss';
import { MemoList } from './MemoList';
import { useMemoList } from '../_hooks/useMemoList';

export const App: FC = () => {

  const { memos, addTodo, deleateTodo } = useMemoList()
  // text box State
  const [text, setText] = useState<string>("")


  // Set input contents to State
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e)
    // console.log(e.target.value)
    setText(e.target.value)
  }

  //  Add memo 
  const onClickAdd = () => {
    // テキストボックスの入力内容をメモ配列に追加
    addTodo(text)
    // テキストボックスを空に
    setText("")
  }

  const onClickDelete = useCallback((index: number) => {
    deleateTodo(index)
  }, [deleateTodo])

  return (
    <div className="App">
      <h1>
        simple note app
      </h1>

      <p className='add-note'>
        <input className='input-note' type="text" value={text} onChange={onChangeText} />
        <button className='button' onClick={onClickAdd}>追加</button>
      </p>

      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
}

export default App