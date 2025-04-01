import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Details from "./member";
import Note from "./Note";
import Secretary from "./Secretary";  


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Note />} />
        <Route path="/member" element={<Details />} />
        <Route path="/Secretary" element={<Secretary />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
