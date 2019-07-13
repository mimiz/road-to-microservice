import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { Server } from "http";
import { initEventManager } from "./eventManager";
import { initListeners } from "./listeners";
import { initRoutes } from './routes';

let server: Server | null = null;

function initApplication(): express.Application {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    initRoutes(app);
    return app;
}

function start() {
    // Create eventManager Instance (only one for all  applciation)
    initEventManager();

    // Add Listeners
    initListeners();

    const app = initApplication();
    server = app.listen(process.env.PORT || 3000, () => {
        console.log(`Server started`);
    });
}

// Start the application
start();