import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

export default function App() {
  export default class extends React.Component {
    getLocation = async () => {
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    };
    componentDidMount() {
      this.getLocation();
    }
    render() {
      return <Loading />;
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
