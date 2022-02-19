import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Inject
} from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { Response } from 'express';
import { STATUS_CODES } from 'http';
import { Logger } from 'winston';
@Catch(BadRequestException, ValidationError)
export class BadRequestFilter implements ExceptionFilter {
  constructor() {}

  catch(exception: HttpException, host: ArgumentsHost) {
    if (exception instanceof BadRequestException) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const errorMessage = exception.message;
      const r = exception.getResponse() as any;

      const validationErrors = r.message as ValidationError[];
      let statusCode = 400;

      response.status(statusCode).json({
        statusCode: statusCode,
        error: STATUS_CODES[statusCode],
        messages: validationErrors
      });
    } else {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const errorMessage = exception.message;

      response.status(exception.getStatus()).json({
        statusCode: exception.getStatus(),
        error: exception.getStatus(),
        messages: errorMessage
      });
    }
  }
}
