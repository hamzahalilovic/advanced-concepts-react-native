import React, { Component } from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import { black } from "ansi-colors";

class Ball extends Component {
  componentWillMount() {
    //how to do DidMount
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, { toValue: { x: 200, y: 500 } }).start();
  }

  render() {
    return (
      //getLayout not in DidMount
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "black"
  }
};
export default Ball;
