import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default function App() {
  export default class extends React.Component {
    state = {
      isLoading: true,
    };
    getLocation = async () => {
      try {
        await Location.requestPermissionsAsync();
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();
        this.setState({ isLoading: false });
      } catch (error) {
        Alert.alert("Can't find you.", "So sad");
      }
    };
    componentDidMount() {
      this.getLocation();
    }
    render() {
      const { isLoading } = this.state;
      return isLoading ? <Loading /> : null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
