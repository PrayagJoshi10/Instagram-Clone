import PostListItem from "@/src/components/PostListItem";
import { FlatList, View } from "react-native";
import posts from "@/assets/data/posts.json";
export default function FeedScreen() {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={(data) => <PostListItem post={data.item} />}
        contentContainerStyle={{ gap: 10 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
