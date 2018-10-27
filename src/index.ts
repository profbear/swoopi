import {SwoopiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {SwoopiApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new SwoopiApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);

  return app;
}
