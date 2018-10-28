/*
 * Copyright (c) 2018 Unbearable Professional
 *
 * I dedicate any and all copyright interest in this software to the
 * public domain. I make this dedication for the benefit of the public at
 * large and to the detriment of my heirs and successors. I intend this
 * dedication to be an overt act of relinquishment in perpetuity of all
 * present and future rights to this software under copyright law.
 */

import {SwoopiApplication} from './application';
import {ApplicationConfig, /*CoreBindings*/} from '@loopback/core';
// import {RestBindings,RestServer} from '@loopback/rest'

export {SwoopiApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new SwoopiApplication(options);

  // const rest = await app.getServer(RestServer)
  // rest.bind(RestBindings.PORT).to(9000);
  // rest.bind(RestBindings.API_SPEC).to({
  //   openapi: '3.0.0',
  //   info: {
  //     title: 'hahaplication',
  //     version: '1.1.1',
  //   },
  //   paths: {},
  //   servers: [{url: '/'}],
  // })/*.to(apiSpec) */

  await app.boot();
  await app.start();

  console.log(`Server is running at ${app.restServer.url}`);

  return app;
}
