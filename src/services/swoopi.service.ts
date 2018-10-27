import {GenericService, getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {StarwarsDataSource} from '../datasources';


export interface RootResource {
  [name: string]: string;
}

export interface SwoopiService extends GenericService {
  root(): Promise<RootResource>

  schema(model: string, schema: string): Promise<RootResource>
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
