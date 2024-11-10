import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 전환을 위한 useNavigate 사용

function Login() {
  // 상태 관리: 사용자 입력 값
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // 페이지 전환을 위한 navigate

  // 로그인 처리 함수
  const handleLogin = (e) => {
    e.preventDefault();

    // 간단한 유효성 검사 (빈 값 체크)
    if (!username || !password) {
      setError('모든 필드를 입력해주세요.');
      return;
    }

    // 로그인 성공 시 처리 (여기서는 간단히 콘솔 출력)
    console.log('로그인 시도:', { username, password });
    alert('로그인 성공!');

    // 로그인 후 상태 초기화
    setUsername('');
    setPassword('');
    setError('');
  };

  // 회원가입 페이지로 이동
  const handleSignup = () => {
    navigate('/signup'); // 회원가입 페이지로 이동
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>아이디</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디를 입력하세요"
            required
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            required
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          로그인
        </button>
      </form>

      {/* 회원가입 버튼 */}
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button
          onClick={handleSignup}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Login;