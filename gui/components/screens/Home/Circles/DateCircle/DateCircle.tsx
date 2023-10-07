import React from "react";
import { Circle } from "../../../../shared/Circle";
import { sizeOfBigCircle } from "../../../../../constants";
import { Colors } from "../../../../../colors";
import { RoundedSquare } from "../../../../shared/RoundedSquare";
import { DateComponent } from "./DateComponent";

export const DateCircle = ({ date }: { date: Date }) => {
  return (
    <Circle
      style={{ justifyContent: "center", alignContent: "center" }}
      size={sizeOfBigCircle * 0.6}
      backgroundColor={Colors.Background.Light}
      position={"absolute"}
      top={-sizeOfBigCircle * 0.38}
      right={-sizeOfBigCircle * 0.25}
    >
      <RoundedSquare
        size={sizeOfBigCircle * 0.4}
        backgroundColor={Colors.Background.Primary}
      >
        <DateComponent>
          {date.getDate().toString().padStart(2, "0")}.
          {(date.getMonth() + 1).toString().padStart(2, "0")}
        </DateComponent>
        <DateComponent>{date.getFullYear()}</DateComponent>
      </RoundedSquare>
    </Circle>
  );
};
