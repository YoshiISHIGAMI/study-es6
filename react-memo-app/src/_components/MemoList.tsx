export interface Props {
  memos: string[],
  onClickDelete: (index: number) => void;
}

export const MemoList = (props: Props) => {

  const { memos, onClickDelete } = props

  console.log(memos)

  return (
    <div className="note_list">
      <h2>
        notes list
      </h2>
      <ul>
        {memos.map((memo, index): any => {
          return (
            <li key={index}>
              <p>{memo}</p>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
