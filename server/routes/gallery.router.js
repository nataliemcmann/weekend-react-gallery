const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('In PUT route');
    //what am I sending
    console.log(req.params.id);
    console.log(req.body.likes);
    let newLikes = req.body.likes += 1;

    let sqlQuery =
    `UPDATE "gallery"
        SET "likes"=$1
        WHERE "id"=$2
    `;
    let sqlValues = [newLikes, req.params.id];
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        console.log('PUT successful');
        res.sendStatus(200);
    })
    .catch((dbErr) => {
        console.log('Error in PUT', dbErr)
        res.sendStatus(500);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log('GET successful');
    let sqlQuery = `
    SELECT * from "gallery"
    ORDER BY "id"
    `;
    pool.query(sqlQuery)
    .then((dbRes) => {
        res.send(dbRes.rows);
    })
    .catch((dbErr) => {
        console.log('GET route not working', dbErr);
        res.sendStatus(500);
    })
}); // END GET Route


// POST Route
router.post('/', (req, res) => {
    console.log('POST successful');
    let path = req.body.path;
    let description = req.body.description;
    console.log(path);
    console.log(description);

    let sqlQuery = `
    INSERT INTO "gallery"
    ("path", "description", "likes")
    VALUES 
    ($1, $2, 0)
    `;
    let sqlValues = [path, description];
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        res.sendStatus(201);
    })
    .catch((dbErr) => {
        console.log('POST route failed', dbErr);
        res.sendStatus(500);
    })
}); // END POST route 

// DELETE Route
router.delete('/delete/:id', (req, res) => {
    console.log('DELETE successful');
    let sqlQuery = `
    DELETE FROM "gallery"
    WHERE "id" = $1
    `;
    let sqlValues = [req.params.id];
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        res.sendStatus(200);
    })
    .catch((dbErr)=> {
        console.log('DELETE route failed', dbErr);
        res.sendStatus(500);
    })
}); //END DELETE route 

module.exports = router;