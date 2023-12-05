import * as React from 'react';
import { LayoutProps } from '../../models';

export interface EmptyLayoutProps {
}

export function EmptyLayout (props: LayoutProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}


