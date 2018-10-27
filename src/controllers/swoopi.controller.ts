import {get} from '@loopback/openapi-v3';
import {People} from '../models'
import {inject,} from '@loopback/core';
import {SwoopiService} from '../services'
import {SchemaObject} from 'openapi3-ts';
import * as d from 'debug';
const log = d('swoopi:controller:swoopi')


const schemaWithObjectPropOfMyModel: SchemaObject = {
  type: 'object',
  properties: {
    results: {'x-ts-type': People},
  },
};

export class SwoopiController {
  constructor(
      @inject('services.SwoopiService')
      protected service: SwoopiService
  ) {
  }

  @get('people', {
    responses: {
      '200': {
        description: 'people',
        content: {'application/json': {schema: schemaWithObjectPropOfMyModel}},
      },
    },
  })
  async people() {
    return await this.service.model('people')
  }
}
