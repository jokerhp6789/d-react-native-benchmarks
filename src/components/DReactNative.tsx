import React from 'react';
import {View, ScrollView} from 'd-component-react-native';

const DReactNative = () => {
  return (
    <ScrollView horizontal className="flex-row">
      {new Array(2000).fill(0).map((_, i) => (
        <View key={i} className="border-2 border-red p-2" />
      ))}
    </ScrollView>
  );
};

export default DReactNative;
