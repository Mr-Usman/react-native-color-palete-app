import React, {useState, useCallback} from 'react';
import _ from 'lodash';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';

const AddNewPaletteModal = ({navigation}) => {
  const [colors, setColors] = useState([
    {colorName: 'AliceBlue', hexCode: '#F0F8FF'},
    {colorName: 'AntiqueWhite', hexCode: '#FAEBD7'},
    {colorName: 'Aqua', hexCode: '#00FFFF'},
    {colorName: 'Aquamarine', hexCode: '#7FFFD4'},
    {colorName: 'Azure', hexCode: '#F0FFFF'},
    {colorName: 'Beige', hexCode: '#F5F5DC'},
    {colorName: 'Bisque', hexCode: '#FFE4C4'},
    {colorName: 'Black', hexCode: '#000000'},
    {colorName: 'Crimson', hexCode: '#DC143C'},
    {colorName: 'Cyan', hexCode: '#00FFFF'},
    {colorName: 'DarkBlue', hexCode: '#00008B'},
    {colorName: 'DarkCyan', hexCode: '#008B8B'},
    {colorName: 'DarkGoldenRod', hexCode: '#B8860B'},
    {colorName: 'DarkGray', hexCode: '#A9A9A9'},
    {colorName: 'DarkGrey', hexCode: '#A9A9A9'},
    {colorName: 'DarkGreen', hexCode: '#006400'},
    {colorName: 'DarkKhaki', hexCode: '#BDB76B'},
    {colorName: 'DarkMagenta', hexCode: '#8B008B'},
    {colorName: 'DarkOliveGreen', hexCode: '#556B2F'},
  ]);
  const [colorPalette, setColorPaletee] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const onPress = useCallback(() => {
    if (!colorPalette) {
      Alert.alert('enter the color platette name.');
    } else if (selectedColors.length < 3) {
      Alert.alert('At least select 3 colors.');
    } else {
      const newColorPalette = {
        paletteName: colorPalette,
        colors: selectedColors,
      };
      navigation.navigate('Home', {newColorPalette});
    }
  }, [colorPalette, navigation, selectedColors]);

  const handleUpdate = useCallback(
    (color, newValue) => {
      if (newValue) {
        setSelectedColors(selectedColor => [color, ...selectedColor]);
      } else {
        setSelectedColors(selectedColor =>
          selectedColor.filter(sc => sc.colorName !== color.colorName),
        );
      }
    },
    [selectedColors, setSelectedColors],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headingTxt}>Enter the name of color platette</Text>
      <TextInput
        style={styles.input}
        onChangeText={setColorPaletee}
        value={colorPalette}
      />
      <FlatList
        data={colors}
        keyExtractor={item => item.colorName}
        renderItem={({item}) => (
          <View style={styles.color}>
            <Text>{item.colorName}</Text>
            <Switch
              value={
                !!selectedColors.find(
                  color => color.colorName === item.colorName,
                )
              }
              onValueChange={newValue => handleUpdate(item, newValue)}
            />
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: 'white',
    // ...StyleSheet.absoluteFillObject,
  },
  colorRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center', // align the items
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between', // align the itemsali
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});

export default AddNewPaletteModal;
