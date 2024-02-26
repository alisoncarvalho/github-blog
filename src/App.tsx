import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"

export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles/>
        <Router/>
      </ThemeProvider>
    </BrowserRouter>
  )
}