const express = require("express")
const path = require('path')
const fs = require('fs')
const DB = path.resolve(__dirname, '../data/posts.json')
const router = express.Router()

router.get('/:id', (req, res) => {
    const id = req.params.id

    fs.readFile(DB, (err, data) => {
        if (err) throw err

        const posts_list = JSON.parse(data)
        const post = posts_list.filter(post => post.id == id)[0]

        res.render('inner', { post: post })
    })
})

module.exports = router;
