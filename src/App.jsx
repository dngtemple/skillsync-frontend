import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./login";
import Signup from "./signup";
import Dashboard from "./dashboard";
import StepperFeild from "./stepperFeild";
import Notfound from "./404";
import Courses from "./courses";
import Home from "./home";
import Peers from "./peers";
import Messages from "./messages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/home" element={<Home />}>
              {" "}
            </Route>
            <Route path="/courses" element={<Courses />}>
              {" "}
            </Route>
            <Route path="/peers" element={<Peers />}>
              {" "}
            </Route>
            <Route path="/messages" element={<Messages />}>
              {" "}
            </Route>
            {/* <Route path='/courses' element={<Courses/>}> </Route> */}
          </Route>
          <Route path="/stepper" element={<StepperFeild />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
