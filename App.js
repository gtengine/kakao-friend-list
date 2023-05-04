import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./src/Header";
import Profile from "./src/Profile";
import { friendProfiles, myProfile } from "./src/data";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import { useState } from "react";
import TabBar from "./src/TabBar";

export default function App() {
  const [isOpened, setIsOpended] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpended(!isOpened);
  };

  const ItemSeparatorComponent = () => <Margin height={8} />;

  const renderItem = ({ item }) => {
    return (
      <View>
        <Profile uri={item.uri} name={item.name} introduction={item.introduction} isMe={false} />
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <View style={{ backgroundColor: "white" }}>
        <Header />

        <Margin height={16} />

        <Profile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
          isMe={true}
        />

        <Margin height={16} />

        <Division />

        <Margin height={16} />

        <FriendSection
          numOfFriends={friendProfiles.length}
          onPress={onPressArrow}
          isOpened={isOpened}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={isOpened ? friendProfiles : []}
          keyExtractor={(_, index) => index}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          stickyHeaderIndices={[0]}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
      <TabBar selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
