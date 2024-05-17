import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import EmptyState from "../../components/EmptyState";
import SearchInput from "../../components/SearchInput";

// Add a heart icon to each post to indicate save post
// when heart is clicked should get user id
// Adding liked attributes to video collections to indicate userid that want to save video
// makes new fetch that fetching all posts liked by users

const bookmark = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[]}
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

const styles = StyleSheet.create({});
