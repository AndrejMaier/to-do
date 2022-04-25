import express from 'express';
import { Low, JSONFile } from 'lowdb';

// database config
const file = 'db/db.json';
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read()

// server config
const app = express();
const PORT = 5000;


// server router
app.get('/', (req, res) => {
	res.send(`<h1>${db.data.posts[0]}</h1>`)
})

app.get('/404', (req, res) => {
	res.send('Page not found')
})

app.listen(PORT, () => {
	console.log(`app listening on port ${PORT}`)
})