const style = {
  with: "100px",
  padding: "6px",
  borderRadius: "8px"
}

export const EditButton = (props: any) => {
  const { isAdmin } = props
  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  )
}