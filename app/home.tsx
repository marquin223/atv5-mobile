import { Text, View } from "react-native";
import { useGlobalSearchParams } from "expo-router";

export default function _Screen() {
  const { id } = useGlobalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}> ID: {id}</Text>
    </View>
  );
}
