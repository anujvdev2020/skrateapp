import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import {UserAuthContextProvider} from './context/UserAuthContext'
function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
