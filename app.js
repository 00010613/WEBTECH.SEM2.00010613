const express = require('express')
const app = express()
const fs = require('fs')

app.set('view engine', 'pug')
const DB = './data/posts.json'

app.use('/static/styles', express.static('public/styles'))
app.use('/static/img', express.static('public/img'))
app.use('/static/icons', express.static('public/icons'))
app.use('/static/fonts', express.static('public/fonts'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/allposts', (req, res) => {
    res.render('allposts')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/inner', (req, res) => {
    res.render('inner')
})
app.get('/newpost', (req, res) => {
    res.render('newpost')
})

app.listen(8000, err => {
    if (err) throw err

    console.log('App is running on port 8000...')
})