import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

// MySQL 연결 설정
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'cruella12',
  database: 'plantiful_db',
});

// MySQL 연결
db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
    throw err;
  }
  console.log('MySQL에 연결되었습니다.');
});

// CORS 미들웨어 추가
app.use(cors());

// Express 미들웨어 및 라우트 설정
app.use(express.json());

// API 라우트 설정
app.get('/api/plants', (req, res) => {
  db.query('SELECT * FROM plantiful_db.plants', (err, results) => {
    if (err) {
      console.error('데이터베이스 오류:', err);
      res.status(500).json({ error: '데이터베이스 오류' });
      return;
    }
    res.json(results);
  });
});

// 서버 시작
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
