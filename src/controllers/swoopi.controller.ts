import {People, Person} from '../models'
import {inject,} from '@loopback/core';
import {SwoopiService} from '../services'
import {MediaTypeObject} from 'openapi3-ts';
import {get, param} from '@loopback/openapi-v3';
import * as d from 'debug';

const log = d('swoopi:controller:swoopi')


const one = <T>(type: T): MediaTypeObject => ({schema: {'x-ts-type': type}})

const many = <T>(type: T): MediaTypeObject => ({
  schema: {type: 'object', properties: {results: {'x-ts-type': type}}}
})

const responses = (desc: string, schema: MediaTypeObject) => ({
  responses: {'200': {description: desc, content: {'application/json': schema}}},
})

export class SwoopiController {
  constructor(
      @inject('services.SwoopiService')
      protected service: SwoopiService
  ) {
  }

  @get('people', responses('people', many(People)))
  async people(
      @param.query.string('search') search?: string,
      @param.query.string('page') page?: string,
  ): Promise<People> {
    return await this.service.models('people', search, page)
  }

  @get('people/{id}', responses('person', one(Person)))
  async findPerson(@param.path.string('id') id: string): Promise<Person> {
    return await this.service.model('people', id)
  }
}
