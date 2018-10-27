import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './starwars.datasource.json';
import * as d from 'debug';
const log = d('swoopi:datasource:starwars')

export class StarwarsDataSource extends juggler.DataSource {
  static dataSourceName = 'starwars';

  constructor(
      @inject('datasources.config.starwars', {optional: true})
          dsConfig: object = config,
  ) {
    super(dsConfig);
    //d.enable('swoopi:*')
    log('starwars initializer')
  }
}
