import { AppProviders } from "./providers/app-providers"
import MuiMode from "./components/mui/MuiMode"
import "./App.css"

function App() {
  return (
    <AppProviders>
      <div className="App">
                        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
