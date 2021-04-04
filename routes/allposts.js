const express = require("express")
const path = require('path')
const fs = require('fs')
const router = express.Router()
const DB = path.resolve(__dirname, '../data/posts.json')

router.get('/', (req, res) => {
    fs.readFile(DB, (err, data) => {
        if (err) throw err

        const posts_list = JSON.parse(data)
        res.render('allposts', { posts_list: posts_list })

    })
})

module.exports = router;
