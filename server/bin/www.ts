#!/usr/bin/env node
import express, { NextFunction } from 'express';
import bodyParser from 'body-parser';
import {
  StartHandler,
  SelectHandler,
} from '../handler/concentration/index';

function normalizePort(val: string) {

  const port = parseInt(val, 10);
  // named pipe
  if (isNaN(port)) return val;

  // port number
  if (port >= 0) return port;

  return false;
}

const router: express.Router = express.Router();
const port = normalizePort(process.env.PORT || '3000');

router
  .get('/api/start', StartHandler.handler)
  .post('/api/select', SelectHandler.handler)

express()
  // CORS対策
  .use((_, res: express.Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  // body-parserに基づいた着信リクエストの解析
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // ルーティング
  .use(router)
  // APIサーバ起動
  .listen(port, ()=>{ console.log(`Example app listening on port ${port}!`) })
  .on('error', onError);


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: { syscall: string; code: any; }) {

  if (error.syscall !== 'listen') throw error;

  const bind = (typeof port === 'string') ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
