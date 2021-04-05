const express = require("express")
const router = express.Router()
const fs = require("fs");
const path = require("path");
const root = path.dirname(
    require.main.filename || process.require.main.filename
);

class DbContext {
    constructor() {
        this.collection = null;
    }

    useCollection(collection = "") {
        this.collection = path.join(root, `data/${collection}`);
        console.log(this.collection)
    }

    deleteOne(id, successCb, errorCb) {
        fs.readFile(this.collection, "utf8", (err, data) => {
            if (err) errorCb();

            const records = JSON.parse(data);

            const filtered = records.filter(record => record.id != id) || [];

            fs.writeFile(this.collection, JSON.stringify(filtered), err => {
                if (err) errorCb();
                successCb();
            });
        });
    }
}

const dbc = new DbContext()
dbc.useCollection("posts.json")

router.get('/:id', (req, res) => {
    dbc.deleteOne(
        req.params.id,
        () => res.render('index', { deleted: true })),
        () => res.sendStatus(500)
})

module.exports = router;
