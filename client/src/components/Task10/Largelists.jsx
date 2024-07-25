import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const Row = ({ index, style }) => (
  <div className={index % 2 ? "bg-red-400" : "bg-green-500"} style={style}>
    Row {index}
  </div>
);

const MyList = () => (
  <AutoSizer>
    {({ height, width }) => (
      <List height={600} width={width} itemCount={1000} itemSize={38}>
        {Row}
      </List>
    )}
  </AutoSizer>
);

export default MyList;
