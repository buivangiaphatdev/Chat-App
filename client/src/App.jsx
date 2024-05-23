import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {

  const { user } = useContext(AuthContext);
  return (
    <>
      <NavBar />
      <Container className="">
        <Routes>
          <Route path="/" element={user ? <Chat /> : <Login />} />
          <Route path="/register" element={user ? <Chat /> : <Register />} />
          <Route path="/login" element={user ? <Chat /> : <Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </>
  );
}

export default App
