import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import LeftNavigationbar from './layouts/LeftNavigationbar'

// 인가된 유저만 접근 허용 예시
// function PrivateRoute({ children }: { children: JSX.Element }) {
//   const isAuthenticated = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" />;
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LeftNavigationbar />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
