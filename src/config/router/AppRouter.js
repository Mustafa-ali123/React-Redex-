import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home  from "../../screen/Home";
import Card  from "../../screen/Card";
import Login  from "../../screen/Login";
import Signup  from "../../screen/Signup";
const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/card" element={<Card/> }/>
        <Route path="/home" element={<Home/> }/>
        <Route path="/login" element={<Login/> }/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
