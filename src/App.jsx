import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserForm from "./components/Pages/UserForm";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserForm/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
