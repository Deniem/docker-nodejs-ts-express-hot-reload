import express, {NextFunction, Request, Response} from 'express';
import {Server} from "http";

// @ts-ignore
const port: number = process.env.SERVER_PORT ?? 3000;
const host: string = process.env.SERVER_HOST ?? '0.0.0.0';

const app = express();
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({msg: 'Hello, World!'});
});

app.listen(port, host, function (this: Server) {
    // @ts-ignore
    const {address, port} = this.address();
    console.log(`running on http://${address}:${port}`);
});

