import 'dotenv/config';
import express from "express";
import { Startbot } from "./app/bot/index.js";

const init = async () => {
    // create server by express
    const CreateServer = () => {
        const app = express();
        const port = 3000;

        app.listen(port, () => {
            console.log(`server running : http://localhost:${port}`);
        });
    };

    await CreateServer();
    Startbot();
};

init();