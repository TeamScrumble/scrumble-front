import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LnbLayout from "./layouts/LnbLayout";
import Project from "./pages/Project";

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
          <Route path="/project/:rowid" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
