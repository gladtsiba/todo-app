import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { UppercaseValue } from 'src/utils/transformers';

export class CreateDtoTodo {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  @UppercaseValue()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
