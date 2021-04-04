const express = require("express")
const multer = require('multer')
const path = require('path')
const router = express.Router()
const fs = require('fs')
const DB = path.resolve(__dirname, '../data/posts.json')
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, idgenerator() + file.originalname);
    }
});

const upload = multer({ storage: storageConfig })

router.get('/', (req, res) => {
    res.render('newpost')
})

router.post('/', upload.single('file'), (req, res) => {
    // const image = req.body.image

    if (req.body) {

        fs.readFile(DB, (err, data) => {
            if (err) throw err

            const posts_list = JSON.parse(data)

            posts_list.push({
                id: idgenerator(),
                post_title: req.body.title,
                post_author: req.body.author,
                post_date: req.body.date,
                post_content: req.body.content,
                post_image: req.file.filename
            })

            fs.writeFile(DB, JSON.stringify(posts_list), (err) => {
                if (err) throw err
                res.render('newpost', { success: true })
            })
        })
    }
})

function idgenerator() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

module.exports = router;
