import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Box = ({colorName, hexCode}) => {
  const bgColor = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.boxColor, bgColor]}>
      <Text style={styles.txtColor}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxColor: {
    alignItems: 'center', // align the items horizontally
    justifyContent: 'center', // align the items vertically
    height: 30,
    marginVertical: 8,
    // color: 'white',
  },
  txtColor: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Box;
