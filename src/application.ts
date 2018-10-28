/*
 * Copyright (c) 2018 Unbearable Professional
 *
 * I dedicate any and all copyright interest in this software to the
 * public domain. I make this dedication for the benefit of the public at
 * large and to the detriment of my heirs and successors. I intend this
 * dedication to be an overt act of relinquishment in perpetuity of all
 * present and future rights to this software under copyright law.
 */

import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import {MySequence} from './sequence';
import * as pack from './../package.json';
import {ContactObject} from 'openapi3-ts';

export class SwoopiApplication extends BootMixin(
    ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options)
    this.api({
      openapi: '3.0.0',
      info: {
        title: pack.name,
        version: pack.version,
        description: pack.description,
        // @ts-ignore
        contact: pack.author as ContactObject,
        license: {
          name: pack.license,
          // @ts-ignore
          url: pack.licenseUrl
        },
      },
      paths: {},
    })

    this.sequence(MySequence)

    this.projectRoot = __dirname
    this.bootOptions = {
      controllers: {
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    }
  }
}
