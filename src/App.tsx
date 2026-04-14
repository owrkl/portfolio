import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
/* import Blog from "./pages/Blog"; // تأكد إنك أنشأت هاد الملف ولو فاضي حالياً */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
