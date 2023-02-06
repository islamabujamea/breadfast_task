import React, {FC, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-paper';

const Splash: FC = () => {
  const navigation = useNavigation<any>();

  const handleNavigation = async () => {
    navigation.dispatch(StackActions.replace('Home'));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNavigation();
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Breadfast App</Text>
    </View>
  );
};

const screenHeight = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: screenHeight * 0.3,
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Splash;
