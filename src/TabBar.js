import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 16,
      }}
      activeOpacity={1}
      onPress={props.onPress}
    >
      {props.iconSource === "Ionicons" && (
        <Ionicons
          name={
            props.isSelected ? props.activeIconName : props.inactiveIconName
          }
          size={24}
          color="black"
        />
      )}
      {props.iconSource === "MaterialCommunityIcons" && (
        <MaterialCommunityIcons
          name={
            props.isSelected ? props.activeIconName : props.inactiveIconName
          }
          size={24}
          color="black"
        />
      )}
    </TouchableOpacity>
  );
};

export default (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        borderTopWidth: 0.5,
        borderTopColor: "lightgray",
      }}
    >
      <TabButton
        isSelected={props.selectedTabIdx === 0}
        onPress={() => props.setSelectedTabIdx(0)}
        activeIconName={"person"}
        inactiveIconName={"person-outline"}
        iconSource={"Ionicons"}
      />
      <TabButton
        isSelected={props.selectedTabIdx === 1}
        onPress={() => props.setSelectedTabIdx(1)}
        activeIconName={"chatbubble"}
        inactiveIconName={"chatbubble-outline"}
        iconSource={"Ionicons"}
      />
      <TabButton
        isSelected={props.selectedTabIdx === 2}
        onPress={() => props.setSelectedTabIdx(2)}
        activeIconName={"shopping"}
        inactiveIconName={"shopping-outline"}
        iconSource={"MaterialCommunityIcons"}
      />
      <TabButton
        isSelected={props.selectedTabIdx === 3}
        onPress={() => props.setSelectedTabIdx(3)}
        activeIconName={"ellipsis-horizontal"}
        inactiveIconName={"ellipsis-horizontal-outline"}
        iconSource={"Ionicons"}
      />
    </View>
  );
};
