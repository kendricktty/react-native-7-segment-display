import React from "react";
import { View, StyleSheet } from "react-native";

type SegmentType = {
    active: boolean;
    color: string;
    size: number;
    id: string;
    skew: boolean;
};

const Segment = ({ active, color, size, id, skew }: SegmentType) => {
    const ss = skew ? skewedSegmentStyle[id] : segmentStyle[id];

    const outerStyle = {
        position: ss.id ? "absolute" : "relative",
        transform: ss.transform ? [{ rotate: ss.transform }] : [],
        marginTop: size * ss.marginTop,
        marginLeft: size * ss.marginLeft,
        padding: size * 0.3,
        shadowColor: active ? color : "transparent",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: active ? 0.8 : 0,
        shadowRadius: size * 0.3,
    };

    const innerStyle = {
        backgroundColor: active ? color : "rgba(0, 0, 0, 0.3)",
        opacity: active ? 1 : 0.3,
        height: size,
        width: size * 5,
        borderRadius: size * 0.2, // Approximate clipPath effect
    };

    // const ss = skew ? skewedSegmentStyle[id] : segmentStyle[id];

    // const outerStyle = {
    //     filter: active
    //         ? `drop-shadow(0px 0px ${size * 0.3}px ${color})`
    //         : "none",
    //     padding: size * 0.3,
    //     width: "fit-content",
    //     position: ss.id ? "absolute" : "relative",
    //     transform: ss.transform,
    //     marginTop: `${size * ss.marginTop}px`,
    //     marginLeft: `${size * ss.marginLeft}px`,
    //     zIndex: "2",
    // } as React.CSSProperties;

    // const innerStyle = {
    //     backgroundColor: color,
    //     filter: active
    //         ? "opacity(1) grayscale(0)"
    //         : "opacity(0.3) grayscale(0.7)",
    //     color: color,
    //     clipPath: ss.clipPath,
    //     WebkitClipPath: ss.clipPath,
    //     MozClipPath: ss.clipPath,
    //     height: `${size}px`,
    //     width: `${size * 5}px`,
    // } as React.CSSProperties;

    return (
        <View style={outerStyle}>
            <View style={innerStyle} />
        </View>
    );
};

export default Segment;
