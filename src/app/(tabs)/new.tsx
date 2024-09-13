import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function CreatePost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="p-3 items-center flex-1">
      <Image
        source={{
          uri: image,
        }}
        className="w-52 aspect-[3/4] rounded-lg bg-slate-300"
      />
      <Text onPress={pickImage} className="text-blue-500 font-semibold m-5">
        Change
      </Text>
      <TextInput
        value={caption}
        onChangeText={(text) => setCaption(text)}
        placeholder="What is on your mind"
        className="w-full p-3"
      />
      <View style={{ marginTop: "auto", width: "100%" }}>
        <Pressable className="bg-blue-500 w-full p-3 items-center rounded-md">
          <Text className="text-white font-semibold">Share</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
