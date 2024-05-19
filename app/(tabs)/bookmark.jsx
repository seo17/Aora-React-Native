import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import EmptyState from "../../components/EmptyState";
import SearchInput from "../../components/SearchInput";
import useAppwrite from "../../lib/useAppwrite";
import { getAllPosts, getSavedVideo } from "../../lib/appwrite";
import VideoCard from "../../components/VideoCard";
import { useGlobalContext } from "../../context/GlobalProvider";

const bookmark = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(() => getSavedVideo(user?.$id));
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts || []}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} userId={user?.$id} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6 items-start">
            <Text className="text-2xl text-white font-psemibold mb-6">
              Saved Video
            </Text>

            <SearchInput placeholder="Search your saved video" />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Saved Videos"
            subtitle="Save your favourite video here"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default bookmark;
