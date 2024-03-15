// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProductOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProductOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProductOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProductOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ProductOutlined.displayName = 'ProductOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProductOutlined);