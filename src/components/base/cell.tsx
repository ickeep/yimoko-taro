import { CellGroup, Cell as NCell, CellProps as NCellProps } from '@nutui/nutui-react-taro';
import { useAdditionalNode } from '@yimoko/store';
import React, { FC } from 'react';

export const Cell: FC<Partial<NCellProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>> & { Group: typeof CellGroup; } = (props) => {
  const { title, description, extra, ...rest } = props;
  const curTitle = useAdditionalNode('title', title);
  const curDescription = useAdditionalNode('description', description);
  const curExtra = useAdditionalNode('extra', extra);

  return <NCell {...rest} title={curTitle} description={curDescription} extra={curExtra} />;
};

Cell.Group = CellGroup;
