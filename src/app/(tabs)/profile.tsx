import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import InputWithLabel from "@/src/components/InputWithLabel";
import Button from "@/src/components/Button";

export default function ProfileScreen() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [userName, setUserName] = useState<string>("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View className="flex-1 p-3">
      <Image
        source={{ uri: image }}
        className="w-52 aspect-square rounded-full self-center bg-slate-300"
      />
      <Text
        onPress={pickImage}
        className="text-blue-500 font-semibold self-center m-5"
      >
        Change
      </Text>
      <InputWithLabel
        label="Username"
        value={userName}
        onChangeText={setUserName}
        placeholder="Username"
      />
      <View style={{ marginTop: "auto", width: "100%", gap: 10 }}>
        <Button
          label="Update"
          onPress={() => {
            console.log("updated");
          }}
        />
        <Button
          label="Log out"
          onPress={() => {
            console.log("logout");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
