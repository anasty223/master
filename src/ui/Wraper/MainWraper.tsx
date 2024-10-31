import React from "react";
import Header from "../Header/Header";

type Props = {
  outerStyle: React.CSSProperties;
  innerStyle: React.CSSProperties;
  children: React.ReactNode;
};

const MainWrapper = (props: Props) => {
  return (
    <div
      style={{
        ...props.outerStyle,
        minWidth: "100%",
        padding: "0px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="max-w-[1400px] mx-auto"
    >
      <div style={props.innerStyle}>{props.children}</div>
    </div>
  );
};

export default MainWrapper;
