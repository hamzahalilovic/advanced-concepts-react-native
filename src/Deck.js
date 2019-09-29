import React, { Component } from "react";
import { View, Animated, PanResponder } from "react-native";

class Deck extends Component {
  constructor(props) {
    super(props);
    //declare position default value 0,0
    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,

      onPanResponderMove: (event, gestureState) => {
        //set position by the move
        position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (event, gestureState) => {}
    });
    //this.position=position
    this.state = { panResponder, position };
  }

  getCardStyle() {
    //interpolate
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-500, 0, 500],
      outputRange: ["-120deg", "0deg", "120deg"]
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  }

  renderCards() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
            {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }

      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      //adding the gesture to animation
      <View>{this.renderCards()}</View>
    );
  }
}
export default Deck;
