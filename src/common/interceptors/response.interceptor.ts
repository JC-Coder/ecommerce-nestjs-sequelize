import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, map } from 'rxjs';

export interface Response<T> {
  data?: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  constructor(private reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> | Promise<Observable<Response<T>>> {
    const responseMessage =
      this.reflector.get('responseMessage', context.getHandler()) ?? null;

    const response = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data) => {
        return {
          success: response.statusCode === 200 || response.statusCode === 201,
          data,
          message: responseMessage || null,
        };
      }),
    );
  }
}
