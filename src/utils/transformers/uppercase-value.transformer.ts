import { Transform } from 'class-transformer';

export const UppercaseValue = () => {
  return Transform((params) => {
    return (params.value as string).toUpperCase();
  });
};
