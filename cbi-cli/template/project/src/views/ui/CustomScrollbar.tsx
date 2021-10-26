import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

export const CustomScrollbars: React.FC<{
    className?: string
}> = (props) => <Scrollbars  {...props} autoHide
    renderTrackHorizontal={(props: any) => <div {...props}
        style={{ display: 'none' }}
        className="track-horizontal" />} />;

