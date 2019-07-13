import express = require("express");
import { getEventManager } from "./eventManager";

export function initRoutes(app: express.Application) {
    app.post('/event', (req, res, next) => {
        const { name, payload } = req.body;
        if (name && payload) {
            getEventManager().emit(name, payload);
            res.sendStatus(204);
        } else {
            res.sendStatus(400)
        }
    })
}