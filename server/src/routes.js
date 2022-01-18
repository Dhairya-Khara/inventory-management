const express = require('express')
const multer = require('multer')
const sharp = require('sharp')

const router = new express.Router()

const Inventory = require('./database')

router.get('/', (req, res) => {
    res.send("yo")
})

const upload = multer({
    limits: {
        fileSize: 5000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image less than 5MB'))
        }

        cb(undefined, true)
    }
})

//API endpoint to create item
router.post('/createItem', upload.single('image'), async (req, res) => {
    
    let buffer = ""
    try {
        buffer = await sharp(req.file.buffer).resize({ width: 100, height: 100 }).png().toBuffer()
    }
    catch (e) {
        buffer = ""
    }
    try {
        const client_item = {
            name: req.body.name,
            stock: parseInt(req.body.stock),
            createdAt: parseInt(req.body.createdAt),
            note: req.body.note,
            id: req.body.id,
            image: buffer
        }
        const item = new Inventory(client_item)
        await item.save()

        res.sendStatus(200)

    }
    catch (e) {
        res.status(400).send(e)
    }
})

//API endpoint to get all the items
router.get('/getItems', async (req, res) => {
    try {
        let items = await Inventory.find({})
        res.status(200).json(items)
    }

    catch (e) {
        res.status(400).send(e)
    }

})

//API endpoint to get a single item, used for editting individual expense
router.get('/singleItem', async (req, res) => {
    try {
        let item = await Inventory.find({ id: req.query.id })
        res.status(200).json(item)
    }

    catch (e) {
        res.status(400).send(e)
    }

})

//API endpoint to update a single item
router.patch('/updateItem', upload.single('image'), async (req, res) => {

    let buffer = ""
    try {
        buffer = await sharp(req.file.buffer).resize({ width: 100, height: 100 }).png().toBuffer()
    }
    catch (e) {
        buffer = ""
    }

    try {
        const item_id = req.body.id
        Inventory.updateOne({ "id": item_id }, {
            $set: {
                "name": req.body.name,
                "stock": parseInt(req.body.stock),
                "createdAt": parseInt(req.body.createdAt),
                "note": req.body.note
            }
        }).exec()
        if (buffer !== "") {
            Inventory.updateOne({ "id": item_id }, {
                $set: {
                    "image": buffer
                }
            }).exec()
        }
        res.sendStatus(200)

    }

    catch (e) {
        res.status(400).send(e)
    }

})

//API endpoint to delete the chosen item
router.post('/deleteItem', async (req, res) => {
    try {
        const item_id = req.query.id
        await Inventory.deleteOne({ id: item_id })
        res.sendStatus(200)

    }

    catch (e) {
        res.status(400).send(e)
    }

})

//API endpoint to get the image for a particular item
router.get('/getImage', async (req, res) => {
    try {
        let item = await Inventory.find({ id: req.query.id })

        if (!item || !item[0].image) {
            throw new Error()
        }

        res.set('Content-Type', 'image/png')
        res.send(item[0].image)

    }
    catch (e) {
        res.status(404).send(e)
    }
})

router.get('*', (req, res)=>{
    res.status(404).send('404. Not Found')
})

module.exports = router
