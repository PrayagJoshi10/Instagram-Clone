import PostListItem from "@/src/components/PostListItem";
import { FlatList, View } from "react-native";
import posts from "@/assets/data/posts.json";
export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      className="max-w-lg"
      renderItem={(data) => <PostListItem post={data.item} />}
      contentContainerStyle={{ gap: 10 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}
