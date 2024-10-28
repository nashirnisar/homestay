import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout";
import { HomePage } from "./pages/HomePage";
import { DeluxeRoom, FamilySuite, StandardRoom } from "./pages/Rooms";
import { ScrollToTop } from "./utils";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/standard-room" element={<StandardRoom />} />
            <Route path="/deluxe-room" element={<DeluxeRoom />} />
            <Route path="/family-suite" element={<FamilySuite />} />
          </Routes>
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
