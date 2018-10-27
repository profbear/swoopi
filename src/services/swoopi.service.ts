import {GenericService, getService} from '@loopback/service-proxy';
import {inject, Provider,} from '@loopback/core';
import {AnyObject} from '@loopback/repository';
import {StarwarsDataSource} from '../datasources';
import {Swapi, SwapiPage} from '../models'

export interface SwoopiService extends GenericService {
  root(): Promise<AnyObject>;
  schema(model: string): Promise<AnyObject>; // note JSON Schema type
  models(model: string, search?: string, page?: string): Promise<SwapiPage>;
  model(model: string, id: string): Promise<Swapi>;
}

export class SwoopiServiceProvider implements Provider<SwoopiService> {
  constructor(
      // starwars must match the name property in the datasource json file
      @inject('datasources.starwars')
      protected dataSource: StarwarsDataSource = new StarwarsDataSource(),
  ) {
  }

  value(): Promise<SwoopiService> {
    return getService(this.dataSource);
  }
}
