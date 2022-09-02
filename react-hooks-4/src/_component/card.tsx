import { EditButton } from "./editButton"

const style: any = {
  width: "300px",
  height: "200px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#e9dbd0",
  display: "flex",
  flexDirection: "colimn",
  alignItems: "center"
}

export const Card = () => {
  return (
    <div className={style}>
      <EditButton />
    </div>
  )
}