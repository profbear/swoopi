import {get} from '@loopback/openapi-v3';
import {Peoples} from '../models'
import {inject,} from '@loopback/core';
import {SwoopiService} from '../services'
import {SchemaObject} from 'openapi3-ts';
import * as d from 'debug';
const log = d('swoopi:controller:swoopi')


const schemaWithObjectPropOfMyModel: SchemaObject = {
  type: 'object',
  properties: {
    results: {'x-ts-type': Peoples},
  },
};

export class SwoopiController {
  constructor(
      @inject('services.SwoopiService')
      protected service: SwoopiService
  ) {
  }

  @get('peoples', {
    responses: {
      '200': {
        description: 'peoples',
        content: {'application/json': {schema: schemaWithObjectPropOfMyModel}},
      },
    },
  })
  async people() {
    return await this.service.model('people')
  }
}
