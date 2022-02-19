import { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { lookup } from 'geoip-lite';
import * as requestIp from 'request-ip';

export const CountryCode = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    if (req.clientIp) {
      return lookup(req.clientIp).country;
    }
    //return lookup("45.251.35.151").country;
    return lookup(requestIp.getClientIp(req)).country;
  }
);
