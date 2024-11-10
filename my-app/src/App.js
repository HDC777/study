import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // react-router-dom에서 import
import MainPage from './pages/Main/mainpage'; // 경로 확인 후 import
import Login from './pages/Login/Loginform'; // 경로 확인 후 import
import Signup from './pages/Signup/Signuppage'; // 경로 확인 후 import

function App() {
  return (
    <Router> {/* Router를 이용하여 라우팅 설정 */}
      <Routes>
        <Route path="/" element={<Login />} /> {/* 기본 경로는 Login 페이지 */}
        <Route path="/login" element={<Login />} /> {/* 로그인 페이지 */}
        <Route path="/signup" element={<Signup />} /> {/* 회원가입 페이지 */}
        <Route path="/main" element={<MainPage />} /> {/* 로그인 후 이동할 MainPage */}
      </Routes>
    </Router>
  );
}

export default App;