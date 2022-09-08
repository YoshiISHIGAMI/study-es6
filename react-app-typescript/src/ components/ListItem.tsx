type User = {
  id: number;
  name: string;
  age: number;
}

export const ListItem = (props: User) => {
  const { id, name, age } = props
  console.log(props)
  return (
    <p>
      {id}: {name} ({age})
    </p>
  )
}

