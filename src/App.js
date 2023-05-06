import { Provider } from "react-redux";
import AppRouter from "./config/router/AppRouter";

function App() {
  return (
    <>
    <Provider>
    <AppRouter/>
    </Provider>
    </>
  )
}

export default App;
