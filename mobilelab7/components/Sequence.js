import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button } from "react-native";
const Sequence = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fade = fadeAnim.interpolate({
    inputRange: [0,0.5, 1],
    outputRange: [1, 0,1],
    });
//  animated Value
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  return (
        <View style={styles.container}>
      <Animated.Image
        style={ [ styles.it_logo,
            {opacity: fade} ] }
        source={require("../assets/IT_Logo.png")}
        />

           <Button title="Spring" onPress={fadeIn} />
    </View>
  );
};
export default Sequence;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    it_logo:{
        width: 180, height: 150
    }
  });
