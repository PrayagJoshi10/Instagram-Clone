import { Pressable, Text } from "react-native";

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <Pressable
      className="bg-blue-500 w-full p-3 items-center rounded-md"
      onPress={onPress}
    >
      <Text className="text-white font-semibold">{label}</Text>
    </Pressable>
  );
}
