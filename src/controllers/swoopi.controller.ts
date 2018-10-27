import {inject} from '@loopback/context';
import {SwoopiService} from '../services'
import {get} from '@loopback/rest';
import {People} from '../models'

export class SwoopiController {
  constructor(@inject('services.SwoopiService')
              protected service: SwoopiService) {
  }

  @get('peoples', {
    responses: {
      '200': {
        description: 'people',
        content: {'application/json': {schema: {items:{'x-ts-type': People}}}},
      },
    },
  })
  async people(): Promise<People[]> {
    const peoples = await this.service.model('people')
    return peoples.results
  }
}
