import { useState } from 'react'
import axios from "axios"

export const useFetchUsers = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const onClickFetchUser = () => {
    setIsLoading(true)
    setIsError(false)

    // API の実行
    axios
      .get('./test.json')
      .then(
        result => {
          console.log(result)
          const users = result.data.map(user => (
            {
              id: user.id,
              name: `${user.lastName} ${user.firstName}`,
              age: user.age
            }
          ))
          setUserList(users)
        }
      )
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
  }

  return { userList, isLoading, isError, onClickFetchUser }
}