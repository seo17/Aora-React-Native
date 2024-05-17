import { Image, ScrollView, StatusBar } from "react-native";
import { Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

// Onboarding Screen
export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  // Change it back to Redirect to home
  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85vh] justify-center items-center px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
          />

          <View className="mt-5 relative">
            <Text className="text-3xl font-bold text-white text-center">
              Discover endless possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              resizeMode="contain"
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-7 "
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      {/* Status Bar of the phone on lidth theme */}
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
