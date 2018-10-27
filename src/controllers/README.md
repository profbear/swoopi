```typescript
import {model, property} from '@loopback/repository';
import {get, post, requestBody} from '@loopback/openapi-v3';

@model()
class MyModel {
  @property() name: string;
}

const schemaOfMyModel = {'x-ts-type': MyModel}

export class MyController {
  @get('/my-controller', {
    responses: {
      '200': {
        description: 'hello world',
        content: {'application/json': {schema: schemaOfMyModel}},
      },
    },
  })
  hello(): MyModel {
    return {name: 'loopback'}
  }
}

const schemaWithArrayOfMyModel = {
  type: 'array',
  items: {
    'x-ts-type': MyModel,
  }
};

const schemaDeepArrayOfMyModel = {
  type: 'array',
  items: {
    type: 'array',
    items: {
      'x-ts-type': MyModel,
    },
  },
};

const schemaWithObjectPropOfMyModel = {
  type: 'object',
  properties: {
    myModel: {
      'x-ts-type': MyModel,
    },
  },
};

export class SomeController {
  @post('/my-controller')
  greetObjectProperty(
      @requestBody({
        content: {'application/json': {schema: schemaWithObjectPropOfMyModel}},
      })
          body: { myModel: MyModel },
  ): string {
    return `hello ${body.myModel.name}!`;
  }

  @get('/my-controllers', {
    responses: {
      '200': {
        description: 'hello world',
        content: {'application/json': {schema: schemaWithArrayOfMyModel}},
      },
    },
  })
  everyone(): MyModel[] {
    return [{name: 'blue'}, {name: 'red'}];
  }

  @post('/my-controllers')
  greetEveryone(
      @requestBody({
        content: {'application/json': {schema: schemaDeepArrayOfMyModel}},
      })
          body: MyModel[][],
  ): string {
    return `hello ${body.map(objs => objs.map(m => m.name))}`;
  }
}
```
