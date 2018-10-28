/*
 * Copyright (c) 2018 Unbearable Professional
 *
 * I dedicate any and all copyright interest in this software to the
 * public domain. I make this dedication for the benefit of the public at
 * large and to the detriment of my heirs and successors. I intend this
 * dedication to be an overt act of relinquishment in perpetuity of all
 * present and future rights to this software under copyright law.
 */

import {get} from '@loopback/openapi-v3';
import * as fs from 'fs';
import * as path from 'path';
import {inject} from '@loopback/context';
import {RestBindings, Response} from '@loopback/rest';

export class HomePageController {
  private readonly html: string;
  constructor(@inject(RestBindings.Http.RESPONSE) private response: Response) {
    this.html = fs.readFileSync(
      path.join(__dirname, '../../public/index.html'),
      'utf-8',
    );
  }

  @get('/', {
    responses: {
      '200': {
        description: 'Home Page',
        content: {'text/html': {schema: {type: 'string'}}},
      },
    },
  })
  homePage() {
    this.response
      .status(200)
      .contentType('html')
      .send(this.html);
    return this.response;
  }
}
