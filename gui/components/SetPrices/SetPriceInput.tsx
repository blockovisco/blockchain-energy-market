import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { Colors } from "../../colors";
import { SmallText } from "../shared/StyledText";
import { SetPriceCard } from "./SetPriceCard";

interface SetPriceInputProps {
  label: string;
  placeholder?: string;
  backgroundColor?: string;
  onChangeHandler: (value: string) => void;
}
export const SetPriceInput = ({
  label,
  placeholder,
  backgroundColor,
  onChangeHandler,
}: SetPriceInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (submittedValue: string) => {
    onChangeHandler(submittedValue);
    setInputValue("");
  };
  return (
    <SetPriceCard backgroundColor={backgroundColor} style={{ gap: 10 }}>
      <SmallText color={Colors.Text.White} style={{ fontWeight: "500" }}>
        {label}
      </SmallText>
      <TextInput
        style={inputStyle}
        placeholder={placeholder ?? ""}
        keyboardType="numeric"
        value={`${inputValue}`}
        onChangeText={setInputValue}
      />
      <TouchableOpacity onPress={() => handleSubmit(inputValue)}>
        <View
          style={{
            alignItems: "center",
            backgroundColor: Colors.Background.PrimaryDark,
            borderRadius: 100,
            padding: 2,
            elevation: 2,
            borderColor: Colors.Background.White,
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              color: Colors.Text.White,
              fontWeight: "bold",
              fontSize: 20,
              letterSpacing: 2,
            }}
          >
            SET
          </Text>
        </View>
      </TouchableOpacity>
    </SetPriceCard>
  );
};

const inputStyle = {
  backgroundColor: Colors.Background.White,
  padding: 4,
  paddingHorizontal: 8,
  borderRadius: 8,
  elevation: 2,
  color: Colors.Text.Primary,
  borderWidth: 1,
  borderColor: Colors.Background.PrimaryDark,
};
