import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserForm from "./components/Pages/UserForm";
import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import ProductForm from "./components/Pages/ProductForm";
import ProductTable from "./components/Pages/ProductTable";
import UserTable from "./components/Pages/UserTable";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/usertable" element={<UserTable />} />
          <Route path="/productform" element={<ProductForm />} />
          <Route path="/producttable" element={<ProductTable />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
