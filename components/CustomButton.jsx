import { TouchableOpacity, Text } from "react-native";
import React from "react";

// Button Component
// React Native uses TouchableOpacity

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      } min-h-[62px] justify-center items-center`}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
