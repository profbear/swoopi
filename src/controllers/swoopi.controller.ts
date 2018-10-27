import {People, Person} from '../models'
import {inject,} from '@loopback/core';
import {SwoopiService} from '../services'
import {MediaTypeObject} from 'openapi3-ts';
import {get, param} from '@loopback/openapi-v3';
import * as d from 'debug';

const log = d('swoopi:controller:swoopi')


const PeopleSchema: MediaTypeObject = {
  schema: {
    type: 'object',
    properties: {results: {'x-ts-type': People}},
  }
};
const PersonSchema: MediaTypeObject = {
  schema: {'x-ts-type': Person}
}

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
        content: {'application/json': PeopleSchema},
      },
    },
  })
  async people(
      @param.query.string('search') search?: string,
      @param.query.string('page') page?: string,
  ): Promise<People> {
    return await this.service.models('people', search, page)
  }

  @get('people/{id}', {
    responses: {
      '200': {
        description: 'person',
        content: {'application/json': PersonSchema},
      },
    },
  })
  async findPerson(@param.path.string('id') id: string): Promise<Person> {
    return await this.service.model('people', id)
  }
}
