import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import UserForm from "./components/Pages/UserForm";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import ProductForm from "./components/Pages/ProductForm";
import ProductTable from "./components/Pages/ProductTable";
import UserTable from "./components/Pages/UserTable";
import "./components/style.css";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <BrowserRouter>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/usertable" element={<UserTable />} />
        <Route path="/productform" element={<ProductForm />} />
        <Route path="/producttable" element={<ProductTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
