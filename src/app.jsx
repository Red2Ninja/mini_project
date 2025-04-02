import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Details from "./member";
import Note from "./Note";
import Secretary from "./Secretary";
import MemberForm from "./memberform";  
import BoardForm from "./BoardForm";
import SecretaryDashboard from "./SecretaryDashboard";
import MemberDashboard from "./MemberDashboard";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Note />} />
        <Route path="/memberform" element={<MemberForm />} />
        <Route path="/Secretary" element={<Secretary />} />
        <Route path="/memberform" element={<MemberForm />} /> 
        <Route path="/BoardForm" element={<BoardForm />} /> 
        <Route path="/SecretaryDashboard" element={<SecretaryDashboard />} />
        <Route path = "/MemberDashboard" element={<MemberDashboard />} />
        <Route path = "/member" element={<Details />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
