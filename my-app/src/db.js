const mysql = require('mysql');

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost', // MySQL 서버 주소
  user: 'root',      // MySQL 사용자 이름
  password: '0000',  // MySQL 비밀번호
  database: 'user_data', // 사용할 데이터베이스 이름
});

// 연결 시도
connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    return;
  }
  console.log('MySQL에 성공적으로 연결되었습니다.');
});

// 예: 테이블 데이터 조회
connection.query('SELECT * FROM users', (err, results, fields) => {
  if (err) {
    console.error('쿼리 실행 중 오류 발생:', err);
    return;
  }
  console.log('쿼리 결과:', results);
});

// 연결 종료
connection.end();
