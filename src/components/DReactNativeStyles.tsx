import {styles} from 'd-component-react-native';
import React from 'react';
import {View} from 'react-native';

const DReactNativeStyles = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      {new Array(2000).fill(0).map((_, i) => (
        <View key={i} style={styles('border-2 border-red p-2')} />
      ))}
    </View>
  );
};

export default DReactNativeStyles;
