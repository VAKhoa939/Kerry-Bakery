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
import Login from "./login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root path to /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
