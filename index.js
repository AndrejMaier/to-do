import express from 'express';
import cors from 'cors'; 
import { Low, JSONFile } from 'lowdb';

// database config
const file = 'db/db.json';
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read()

// server config
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.urlencoded());

// server router
app.get('/', (req, res) => {
	res.send(`<h1>${db.data.posts[0]}</h1>`)
})

app.get('/tasks', (req, res) => {
	res.send(db.data.tasks)
})

app.post('/tasks', (req, res) => {
  console.log(req.body);
	res.end();
})

app.listen(PORT, () => {
	console.log(`app listening on port ${PORT}`)
})