import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/core/navigation/TabNavigator"

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator>
        <View style={styles.container}>
          <Text>Open? up App.js to start working on your app?!</Text>
          <StatusBar style="auto" />
        </View>
      </TabNavigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D3D32",
    alignItems: "center",
    justifyContent: "center",
  },
});
