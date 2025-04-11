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
