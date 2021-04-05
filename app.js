const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()

app.set('view engine', 'pug')

// ROUTES
const mainRouter = require("./routes/index.js");
const aboutRouter = require("./routes/about.js");
const allpostsRouter = require("./routes/allposts.js");
const contactRouter = require("./routes/contact.js");
const innerRouter = require("./routes/inner.js");
const newpostRouter = require("./routes/newpost.js");
const deleteRouter = require("./routes/delete.js");
const apiRouter = require("./routes/api.js");


app.use('/static/styles', express.static('public/styles'))
app.use('/static/img', express.static('public/img'))
app.use('/static/icons', express.static('public/icons'))
app.use('/static/fonts', express.static('public/fonts'))
app.use('/static/uploads', express.static('public/uploads'))
app.use(express.urlencoded({ extended: false }))


app.use('/', mainRouter)
app.use('/about', aboutRouter)
app.use('/allposts', allpostsRouter)
app.use('/contact', contactRouter)
app.use('/inner', innerRouter)
app.use('/newpost', newpostRouter)
app.use('/delete', deleteRouter)
app.use('/api/v1', apiRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}...`)
})
