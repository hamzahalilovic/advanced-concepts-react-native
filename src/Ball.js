import React, { Component } from "react";
import { View, StyleSheet, Animated, Text } from "react-native";
import { black } from "ansi-colors";

class Ball extends Component {

  state = {
    position : new Animated.ValueXY(0, 0)
  }

  componentDidMount() {
    //how to do DidMount
    // const position = new Animated.ValueXY(0, 0);
    // this.setState({position})
    Animated.spring(this.state.position, { toValue: { x: 200, y: 500 } }).start();
  }

  render() {
    console.warn(this.state.position)
    return (
      //getLayout not in DidMount
      <Animated.View style={this.state.position.getLayout()}>
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
