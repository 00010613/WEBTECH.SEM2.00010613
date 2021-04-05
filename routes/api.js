const express = require("express")
const path = require('path')
const router = express.Router()
const fs = require('fs')
const DB = path.resolve(__dirname, '../data/posts.json')


router.get('/posts', (req, res) => {
    fs.readFile(DB, (err, data) => {
        if (err) throw err
        const posts = JSON.parse(data)
        res.json(posts)
    })
})

module.exports = router;
