import React, { Dispatch, SetStateAction, useState } from "react";
import { Circle } from "../../../shared/Circle";
import { sizeOfBigCircle } from "../../../../constants";
import { Colors } from "../../../../colors";
import { Icon } from "@rneui/themed";
import { Platform } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

interface DatePickerCircleProps {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}
export const DatePickerCircle = ({ date, setDate }: DatePickerCircleProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event: DateTimePickerEvent, date?: Date) => {
    if (event.type === "set" && !!date) {
      setDate(date);
    }
    setShowDatePicker(Platform.OS === "ios");
  };

  return (
    <Circle
      style={{ justifyContent: "center", alignContent: "center" }}
      size={sizeOfBigCircle * 0.4}
      backgroundColor={Colors.Background.PrimaryLight}
      position={"absolute"}
      top={-sizeOfBigCircle * 0.2}
      right={sizeOfBigCircle * 0.7}
      onPress={() => setShowDatePicker(true)}
      touchable
    >
      <Icon name="calendar-today" color={Colors.Text.White} size={70} />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onDateChange}
        />
      )}
    </Circle>
  );
};
