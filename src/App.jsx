import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/Navbar";
import UserPage from "./pages/UserPage";
import HomePage from "./pages/HomePage";
import SubscribingForm from "./pages/SubscribingForm";
import SubscriberList from "./pages/SubscriberList";
import UserForm from "./pages/UserForm";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UserForm />} />
        <Route path="/users/all-users" element={<UserPage />}></Route>
        <Route
          path="/subscribers/all-subscribers"
          element={<SubscriberList />}
        />
        <Route path="/subscribers" element={<SubscribingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
