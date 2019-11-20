import express from 'express';
import session from 'express-session';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { BaseRoute } from "./core/base.route";
import { WebRoute } from "./routes/web.route";
import { ApiRoute } from "./routes/api.route";
import { ConsoleRoute } from "./routes/console.route";
import { ChannelRoute } from "./routes/channel.route";

export class Application {
    public static readonly App: Application;

    private readonly express: express.Application;
    private readonly routes: BaseRoute[] = [];

    constructor(private port: number) {
        this.express = express();

        this.config();
        this.configRoutes();
        this.listen(this.port);
    }

    private listen(port: number = 3000): void {
        this.express.listen(port, () => console.log('Application running at: http://localhost:' + port));
    }
    private config(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
        this.express.use(express.static(path.join(__dirname, 'public')));
        this.express.use(cookieParser());
        this.express.set('views', path.join(__dirname, 'views'));
        this.express.disable('x-powered-by');
        this.express.set('view engine', 'html');
        this.express.engine('html', require('ejs').renderFile);
        this.express.use(session({
            secret: process.env.SERVER_KEY,
            resave: true,
            saveUninitialized: true,
            cookie: {secure: process.env.NODE_MODE === 'production'}
        }));
    }
    private configRoutes(): void {
        this.routes.push(new WebRoute(this.express));
        this.routes.push(new ApiRoute(this.express));
        this.routes.push(new ConsoleRoute(this.express));
        this.routes.push(new ChannelRoute(this.express));

        this.routes.map((route: ApiRoute | WebRoute | ConsoleRoute | ChannelRoute) => route.route());
    }
}
