import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser';

const routerApi = express.Router()

//mongodb models
import * as db from './data/models'

routerApi.use(bodyParser.urlencoded({ extended: false }))
routerApi.use(bodyParser.json());

//routes
routerApi.get('/collection', async(req, res) => {
    db.collection
        .find(req.query)
        .exec(function(err, result) {
            res.send(result);
        })
});

export default routerApi