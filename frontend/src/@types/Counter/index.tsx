import { ComponentProps } from 'react';

export interface CounterProps extends ComponentProps<'div'> {
  itemQuantity: number;
}
