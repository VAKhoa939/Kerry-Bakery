/*import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import Home from "./home/Home";
import Register from "./auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root path to /login */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
