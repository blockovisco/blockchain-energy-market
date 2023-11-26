import React, { Dispatch, SetStateAction } from "react";

import { DateCircle } from "../DateCircle/DateCircle";
import { DatePickerCircle } from "../DatePickerCircle";
import { MainCircleField } from "./MainCircleField";
import { Colors } from "../../../../colors";
import { Circle } from "../../../shared/Circle";
import { sizeOfBigCircle } from "../../../../constants";
import { Header } from "../../../shared/Header";

interface MainCircleProps {
  accountBalance: number;
  consumedEnergy: number;
  producedEnergy: number;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}

export const MainCircle = ({
  accountBalance,
  consumedEnergy,
  producedEnergy,
  date,
  setDate,
}: MainCircleProps) => {
  return (
    <Circle
      size={sizeOfBigCircle}
      backgroundColor={Colors.Background.Primary}
      position="relative"
      style={{ paddingTop: 15 }}
    >
      <Header level={5} style={{ textAlign: "center", marginTop: 10 }}>
        Balance
      </Header>

      <MainCircleField
        title="Account balance:"
        textColor={Colors.Text.White}
        value={`${accountBalance} B`}
      />

      <MainCircleField
        title="Energy produced:"
        textColor={Colors.Text.Green}
        value={`+${producedEnergy} kWh `}
      />

      <MainCircleField
        title="Energy consumed:"
        textColor={Colors.Text.Red}
        value={`${consumedEnergy > 0 ? "-" : ""}${consumedEnergy} kWh`}
      />

      <DatePickerCircle date={date} setDate={setDate} />
      <DateCircle date={date} />
    </Circle>
  );
};
