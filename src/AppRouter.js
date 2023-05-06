import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home  from "./screen/Home";
import Card  from "./screen/Card";
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/card" element={<Card/> }/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
