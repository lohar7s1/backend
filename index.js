require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData = {
  "login": "lohar7s1",
  "id": 159903248,
  "node_id": "U_kgDOCYfuEA",
  "avatar_url": "https://avatars.githubusercontent.com/u/159903248?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/lohar7s1",
  "html_url": "https://github.com/lohar7s1",
  "followers_url": "https://api.github.com/users/lohar7s1/followers",
  "following_url": "https://api.github.com/users/lohar7s1/following{/other_user}",
  "gists_url": "https://api.github.com/users/lohar7s1/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/lohar7s1/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/lohar7s1/subscriptions",
  "organizations_url": "https://api.github.com/users/lohar7s1/orgs",
  "repos_url": "https://api.github.com/users/lohar7s1/repos",
  "events_url": "https://api.github.com/users/lohar7s1/events{/privacy}",
  "received_events_url": "https://api.github.com/users/lohar7s1/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "anil_7s1",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-02-13T10:52:32Z",
  "updated_at": "2025-05-13T00:49:25Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('anildotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at anil and program</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>anil and program</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})