import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { AuthStateEnum } from "../shared/enums"
import { CheckingAuth } from "../shared/components/CheckingAuth"

import { useAuth } from "../hooks/useAuth"

const AppRouter = () => {

  const { state } = useAuth();

  if (state === AuthStateEnum.CHECKING) {
    return <CheckingAuth/>
  }

  return (
    <Routes>
      {
        state === AuthStateEnum.AUTHENTICATED 
        ? <Route path="/*" element={<JournalRoutes/>}></Route>
        : <Route path="/auth/*" element={<AuthRoutes/>}></Route>
      }
      <Route path="/*" element={<Navigate to="/auth/login" />}></Route>
    </Routes>
  )
}

export default AppRouter