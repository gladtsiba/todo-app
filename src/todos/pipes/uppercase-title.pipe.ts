/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercaseTitlePipe implements PipeTransform {
  transform(value: any) {
    if (value.title) {
      value.title = value.title.toUpperCase();
    }
    return value;
  }
}
