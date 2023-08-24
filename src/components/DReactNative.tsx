import {View} from 'd-component-react-native';

const DReactNative = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      {new Array(1000).fill(0).map((_, i) => (
        <View key={i} className="border-1 border-red p-2" />
      ))}
    </View>
  );
};

export default DReactNative;
