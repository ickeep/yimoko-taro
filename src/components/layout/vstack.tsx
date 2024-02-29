import { View, ViewProps } from "@tarojs/components";
import React from "react";

export type VStackProps = ViewProps & {

}

export const VStack = (props: VStackProps) => {
    const { children, style, ...rest } = props;
    let curStyle = style;
    if (typeof style === 'string') {
        curStyle = (style + ';display: flex;flex-direction: column;') as string;
    } else if (style) {
        curStyle = {
            display: 'flex',
            flexDirection: 'column',
            // @ts-expect-error
            ...curStyle,
        };
    }
    return <View {...rest} style={curStyle}>{children}</View>;
}