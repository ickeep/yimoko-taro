import { View, ViewProps } from "@tarojs/components";
import React from "react";

export type HStackProps = ViewProps & {

}

export const HStack = (props: HStackProps) => {
    const { children, style, ...rest } = props;
    let curStyle = style;
    if (typeof style === 'string') {
        curStyle = (style + ';display: flex;flex-direction: row;') as string
    } else if (style) {
        curStyle = {
            display: 'flex',
            flexDirection: 'row',
            // @ts-expect-error
            ...curStyle,
        };
    }
    return <View {...rest} style={curStyle}>{children}</View>;
}