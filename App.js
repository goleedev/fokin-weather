import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "b91e9e1be9734ef8a3f293684de9a3ef";

export default function App() {
  export default class extends React.Component {
    state = {
      isLoading: true,
    };
    getWeather = async (latitude, longitude) => {
      const {
        data: {
          main: { temp },
          weather,
        },
      } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading: false,
        condition: weather[0].main,
        temp,
      });
    };
    getLocation = async () => {
      try {
        await Location.requestPermissionsAsync();
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();
        this.getWeather(latitude, longitude);
      } catch (error) {
        Alert.alert("Can't find you.", "So sad");
      }
    };
    componentDidMount() {
      this.getLocation();
    }
    render() {
      const { isLoading, temp, condition } = this.state;
      return isLoading ? (
        <Loading />
      ) : (
        <Weather temp={Math.round(temp)} condition={condition} />
      );
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
