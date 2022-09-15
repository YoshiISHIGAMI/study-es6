import { useCallback, useState } from "react";

export const useMemoList = () => {
  // memo State
  const [memos, setMemos] = useState<string[]>([])

  // memo logic
  const addTodo = useCallback((text: string) => {
    const newMemos = [...memos]
    // テキストボックス
    newMemos.push(text)
    setMemos(newMemos)

  }, [memos])

  // memo deleate 
  const deleateTodo = useCallback((index: number) => {
    // State 変更を正常に検知させるため新たな配列を生成
    const newMemos = [...memos]
    newMemos.splice(index, 1)
    setMemos(newMemos)
  }, [memos])

  return { memos, addTodo, deleateTodo }
}