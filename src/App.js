import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./components/landing";
import {Login} from "./components/login";
import {Signup} from "./components/signup";
import Dashboard from "./components/dashboard";
import { handleSignIn } from './utilities/auth';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login onSignIn={handleSignIn}/>} />
        <Route path="signup" element={<Signup />} />
        <Routes path="dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;