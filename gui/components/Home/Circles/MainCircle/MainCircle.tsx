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
  dailyBalance: number;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}

const getTextColor = (value: number) => {
  return value > 0
    ? Colors.Text.Green
    : value === 0
    ? Colors.Text.White
    : Colors.Text.Red;
};

export const MainCircle = ({
  accountBalance,
  consumedEnergy,
  producedEnergy,
  dailyBalance,
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
      ></MainCircleField>

      <MainCircleField
        title="Energy balance:"
        textColors={[Colors.Text.Green, Colors.Text.Red]}
        values={[`+${producedEnergy} kW `, `-${consumedEnergy} kW`]}
      ></MainCircleField>

      <MainCircleField
        title="Daily balance:"
        textColor={getTextColor(dailyBalance)}
        value={`${dailyBalance > 0 ? "+" : ""} ${dailyBalance} B`}
      ></MainCircleField>

      <DatePickerCircle date={date} setDate={setDate} />
      <DateCircle date={date} />
    </Circle>
  );
};
