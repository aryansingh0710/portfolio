import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

const GITHUB_TOKEN = proqcess.env.GITHUB_TOKEN; // stays hidden

app.get('/api/repos', async (req, res) => {
  try {
    const response = await fetch(
      'https://api.github.com/users/aryansingh0710/repos?sort=updated&per_page=30',
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`
        }
      }
    );
    async function getReadmeDescription(username, repoName) {
  try {
    const res = await fetch(`https://api.github.com/repos/${username}/${repoName}/readme`);

    if (!res.ok) return null;

    const data = await res.json();

    // decode base64 content
    const content = atob(data.content);

    // take first meaningful line
    const lines = content.split('\n').filter(line => line.trim() !== '');

    return lines[0].replace(/^#\s*/, ''); // remove markdown heading

  } catch (e) {
    return null;
  }
}

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch repos' });
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
