
import { FuelPage } from './pages/Fuel'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'

import './index.css'

function App() {
 
  return (
    <ThemeProvider theme = {theme}>
      <FuelPage />
    </ThemeProvider>
  )
}

export default App
