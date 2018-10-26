import * as d from 'debug'
import {ModelBuilder} from 'loopback-datasource-juggler'
import {expect} from '@loopback/testlab';

import {SwoopiService, SwoopiServiceProvider} from '../../src/services'
import {StarwarsDataSource} from '../../src/datasources'
import * as dsConfig from '../../src/datasources/starwars.datasource.json'
// import {GenericService} from '@loopback/service-proxy'

const log = d('test:service:starwars')

describe('starwars by way of swoopi', () => {
  let service: SwoopiService
  const testOverrides = {}
  const dataSource = new StarwarsDataSource({
    ...dsConfig,
    ...testOverrides
  })

  before(promisedService)

  it('should sanity', () => {
    expect(service).not.undefined()
  })

  it('should resolve the base', async () => {
    d.enable('test:*')
  })

  xit('skips making tons of calls', async () => {
    const root = await service.root()

    Object.keys(root)
        .map(m => ModelBuilder.defaultInstance
            .buildModelFromInstance(m, {name: 'haha'}, {}))
        .map(async (m) => {
          dataSource.attach(m)
          // log(await m.find()) // note works fine just has type error
        })
  })

  async function promisedService() {
    service = await new SwoopiServiceProvider(dataSource).value()
  }
})
