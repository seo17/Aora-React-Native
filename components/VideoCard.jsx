import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons, images } from "../constants";
import { ResizeMode, Video } from "expo-av";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { createSavedVideo } from "../lib/appwrite";

const VideoCard = ({
  video: {
    $id: videoId,
    title,
    thumbnail,
    video,
    users: { username, avatar },
  },
  userId,
}) => {
  const [play, setPlay] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const saveVideo = () => {
    createSavedVideo(userId, videoId)
      .then((res) => {
        if (res) setIsSaved(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1 ">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="contain"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-white font-psemibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Menu>
            <MenuTrigger>
              <Image
                source={icons.menu}
                className="w-5 h-5"
                resizeMode="contain"
              />
            </MenuTrigger>
            <MenuOptions style={optionStyles}>
              <MenuOption onSelect={saveVideo}>
                <View className="px-4 flex-row justify-start items-center">
                  <Image
                    source={icons.bookmark}
                    resizeMode="cover"
                    className="w-3 h-3"
                  />
                  <Text className="text-base font-psemibold text-gray-100 pl-4">
                    {isSaved ? "Saved" : "Save"}
                  </Text>
                </View>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>

      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const optionStyles = {
  backgroundColor: "#1E1E2D",
  borderRadius: 5,
  borderSize: 2,
  borderStyle: "solid",
  borderColor: "#232533",
  padding: 5,
};

export default VideoCard;
