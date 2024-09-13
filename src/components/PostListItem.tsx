import React from "react";
import { Image, Text, View } from "react-native";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

interface PostListItemProps {
  post: {
    id: string;
    image: string;
    image_url: string;
    caption: string;
    user: {
      id: string;
      avatar_url: string;
      image_url: string;
      username: string;
    };
  };
}
export default function PostListItem({ post }: PostListItemProps) {
  return (
    <View className="bg-white">
      {/* header */}
      <View className="p-3 flex-row items-center gap-2">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      {/* feed image */}
      <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" />
      {/* icons */}
      <View className="flex-row p-3 justify-between items-center">
        <View className="flex-row gap-3">
          <AntDesign name="hearto" size={20} />
          <Ionicons name="chatbubble-outline" size={20} />
          <Feather name="send" size={20} />
        </View>
        <View className="flex-row gap-3">
          <Feather name="bookmark" size={20} className="ml-auto" />
        </View>
      </View>
    </View>
  );
}
