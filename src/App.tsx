import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LnbLayout from "./layouts/LnbLayout";
import Dashboard from "./pages/project/Dashboard";
import ProductBacklog from "./pages/project/ProductBacklog";
import Sprint from "./pages/project/Sprint";

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
          <Route path="/project/:rowid/dashboard" element={<Dashboard />} />
          <Route path="/project/:rowid/dashboard" element={<ProductBacklog />} />
          <Route path="/project/:rowid/dashboard" element={<Sprint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
