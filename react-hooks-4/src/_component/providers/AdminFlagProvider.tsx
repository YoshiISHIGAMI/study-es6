import { createContext, useState } from "react";

export const AdminFlagContext = createContext({})

export const AdminFlagProvider = (props: any) => {
  const { children } = props

  // 管理者 flag
  const [isAdmin, setIsAdmin] = useState(false)
  // 

  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider >
  )
}