import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home= lazy(() => import('./pages/Home'));
const Chat= lazy(() => import('./pages/Chat'));
const Login= lazy(() => import('./pages/Login'));
const Signup= lazy(() => import('./pages/Signup'));
const Group= lazy(() => import('./pages/Group'));
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/group/:id" element={<Group />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
