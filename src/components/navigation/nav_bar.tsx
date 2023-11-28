import { RecursionField, useFieldSchema } from '@formily/react';
import { NavBarProps, NavBar as NNavBar } from '@nutui/nutui-react-taro';
import { ReactNode, useMemo } from 'react';

import { useNavigate } from '../../hooks/use-router';

export const NavBar = (props: Partial<NavBarProps> & { value?: ReactNode }) => {
  const { value, children, right, left, back, onBackClick, ...rest } = props;
  const navigate = useNavigate();
  const schema = useFieldSchema();
  const { additionalProperties, name } = schema ?? {};

  const curLeft = useMemo(() => {
    if (left) {
      return left;
    }
    if (additionalProperties?.properties?.left) {
      return <RecursionField name={name} onlyRenderProperties schema={{ type: 'void', properties: { left: additionalProperties?.properties?.left } }} />;
    }
    return undefined;
  }, [additionalProperties?.properties?.left, left, name]);

  const curRight = useMemo(() => {
    if (right) {
      return right;
    }
    if (additionalProperties?.properties?.right) {
      return <RecursionField name={name} onlyRenderProperties schema={{ type: 'void', properties: { right: additionalProperties?.properties?.right } }} />;
    }
    return undefined;
  }, [additionalProperties?.properties?.right, name, right]);

  const curBack = useMemo(() => {
    if (back) {
      return back;
    }
    if (additionalProperties?.properties?.back) {
      return <RecursionField name={name} onlyRenderProperties schema={{ type: 'void', properties: { back: additionalProperties?.properties?.back } }} />;
    }
    return undefined;
  }, [additionalProperties?.properties?.back, back, name]);

  return (
    <NNavBar
      {...rest}
      left={curLeft}
      right={curRight}
      back={curBack}
      onBackClick={(e) => {
        if (onBackClick) {
          onBackClick(e);
        } else {
          navigate(-1);
        }
      }}
    >{children ?? value}</NNavBar>
  );
};

