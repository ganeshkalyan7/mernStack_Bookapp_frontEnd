import "./App.css";
import Books from "./components/Books";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addbooks from "./components/Addbooks";
import Editbooks from "./components/Editbooks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} exact />
          <Route path="/addbook" element={<Addbooks />} exact />
          <Route path="/editbook/:id" element={<Editbooks />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
