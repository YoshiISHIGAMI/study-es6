import { User } from "../types/user"

export const ListItem = (props: User) => {
  const { id, name, age } = props
  console.log(props)
  return (
    <p>
      {id}: {name} ({age})
    </p>
  )
}

