import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { FC } from "react"
import { ThemeType } from "../shared"
import { purpleTheme } from "."

const AppTheme: FC<ThemeType> = ({children}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}

export default AppTheme