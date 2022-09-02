const style = {
  with: "100px",
  padding: "6px",
  borderRadius: "8px"
}

export const editButton = () => {
  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  )
}