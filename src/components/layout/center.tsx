import { View, ViewProps } from "@tarojs/components";
import React from "react";

export type CenterProps = ViewProps & {

}

export const Center = (props: CenterProps) => {
    const { children, style, ...rest } = props;
    let curStyle = style;
    if (typeof style === 'string') {
        curStyle = (style + ';display: flex;flex-direction: column; align-items: center; justify-content: center;') as string;
    } else if (style) {
        curStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            // @ts-expect-error
            ...curStyle,
        };
    }
    return <View {...rest} style={curStyle}>{children}</View>;
}