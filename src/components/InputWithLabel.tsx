import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputWithLabelProps extends TextInputProps {
  label: string;
}

export default function InputWithLabel({
  label,
  ...props
}: InputWithLabelProps) {
  return (
    <View>
      <Text className="mb-2 text-gray-500 font-semibold">{label}</Text>
      <TextInput {...props} className="border border-gray-300 p-3 rounded-md" />
    </View>
  );
}
