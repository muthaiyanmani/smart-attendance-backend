import { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import * as requestIp from 'request-ip';

export const IpAddress = createParamDecorator((data, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  if (req.clientIp) {
    return req.clientIp;
  }
  return requestIp.getClientIp(req);
});
