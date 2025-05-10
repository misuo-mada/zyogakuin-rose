import express from 'express';
import { Configuration, OpenAIApi } from 'openai'; // ← AI機能があるならそのまま残す
import path from 'path';
import { fileURLToPath } from 'url';

// 必要な初期化
const app = express();
const PORT = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 静的ファイル (画像、CSS、JS など) を public フォルダから配信
app.use(express.static(path.join(__dirname, 'public')));

// ルートアクセス時に public/index.html を返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
