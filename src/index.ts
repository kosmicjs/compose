import {type Context, type Middleware, type Next} from 'koa';

type Options = Record<string, unknown>;

function middleware(options?: Options) {
  // do something here
  return async function (context: Context, next?: Next) {
    // do something here
  };
}

export default middleware;
