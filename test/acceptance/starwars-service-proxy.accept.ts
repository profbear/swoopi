import * as d from 'debug'
import {expect} from '@loopback/testlab';

import {SwoopiService, SwoopiServiceProvider} from '../../src/services'
import {StarwarsDataSource} from '../../src/datasources'
import * as dsConfig from '../../src/datasources/starwars.datasource.json'
// import {GenericService} from '@loopback/service-proxy'

const log = d('test:service:starwars')

describe('starwars via swoopi', () => {
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

  it('should have a root', async () => {
    log(await service.root())
  })

  it('should have a schema', async () => {
    const schema = await service.schema('people')
    expect(schema).to.have.properties(['required', 'description'])
  })

  xit('generate all model schemas from the root', async () => {
    d.enable('test:*')
    Object.keys(await service.root())
        .forEach(async m =>
            log(`/* ${m} */`,
                JSON.stringify(await service.schema(m))
            ))
  })

  async function promisedService() {
    service = await new SwoopiServiceProvider(dataSource).value()
  }
})
