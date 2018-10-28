/*
 * Copyright (c) 2018 Unbearable Professional
 *
 * I dedicate any and all copyright interest in this software to the
 * public domain. I make this dedication for the benefit of the public at
 * large and to the detriment of my heirs and successors. I intend this
 * dedication to be an overt act of relinquishment in perpetuity of all
 * present and future rights to this software under copyright law.
 */

import {inject} from '@loopback/context';
import {
  FindRoute,
  InvokeMethod,
  ParseParams,
  Reject,
  RequestContext,
  RestBindings,
  Send,
  SequenceHandler,
} from '@loopback/rest';

const SequenceActions = RestBindings.SequenceActions;

export class MySequence implements SequenceHandler {
  constructor(
      @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
      @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
      @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
      @inject(SequenceActions.SEND) public send: Send,
      @inject(SequenceActions.REJECT) public reject: Reject,
  ) {
  }

  async handle(context: RequestContext) {
    try {
      const {request, response} = context;
      const route = this.findRoute(request);
      const args = await this.parseParams(request, route);
      const result = await this.invoke(route, args);
      this.send(response, result);
    } catch (err) {
      this.reject(context, err);
    }
  }
}
