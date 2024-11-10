import React, { useState } from 'react';

function Signup() {
  // 상태 관리: 사용자 입력 값
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [school, setSchool] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // 회원가입 처리 함수
  const handleSignup = (e) => {
    e.preventDefault();

    // 간단한 유효성 검사 (빈 값 체크)
    if (!username || !password || !school || !age || !email) {
      setError('모든 필드를 입력해주세요.');
      return;
    }

    // 회원가입 성공 시 처리 (여기서는 간단히 콘솔 출력)
    console.log('회원가입 시도:', { username, password, school, age, email });
    alert('회원가입 성공!');

    // 회원가입 후 상태 초기화
    setUsername('');
    setPassword('');
    setSchool('');
    setAge('');
    setEmail('');
    setError('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>회원가입</h2>
      <form onSubmit={handleSignup}>
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
        <div>
          <label>학교 이름</label>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="학교 이름을 입력하세요"
            required
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>나이</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="나이를 입력하세요"
            required
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        <div>
          <label>이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
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
          회원가입
        </button>
      </form>
    </div>
  );
}

export default Signup;