import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./components/landing"
import Login from "./components/login";
import {Signup} from "./components/signup"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;