import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LnbLayout from "./layouts/LnbLayout";
import Dashboard from "./pages/project/Dashboard";
import Sprint from "./pages/project/Sprint";
import Backlog from "./pages/project/Backlog";

// 인가된 유저만 접근 허용 예시
// function PrivateRoute({ children }: { children: JSX.Element }) {
//   const isAuthenticated = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" />;
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LnbLayout />}>
          <Route index element={<Home />} />
          <Route path="/project/:projectRowid/dashboard" element={<Dashboard />} />
          <Route path="/project/:projectRowid/backlog" element={<Backlog />} />
          <Route path="/project/:projectRowid/sprint" element={<Sprint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
