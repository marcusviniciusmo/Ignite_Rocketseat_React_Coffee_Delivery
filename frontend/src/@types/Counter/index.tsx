import { ComponentProps } from 'react';

export interface CounterProps extends ComponentProps<'div'> {
  itemId?: number;
  itemQuantity: number;
}
