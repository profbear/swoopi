import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {StarwarsDataSource} from '../datasources';

export interface SwoopiService {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
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
