/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Button, InputDate, TabView, Text, View} from 'd-component-react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import DReactNative from './src/components/DReactNative';
import TimedRender from './src/components/TimedRender';
import ReactNative from './src/components/ReactNative';
import DReactNativeStyles from './src/components/DReactNativeStyles';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [styleType, setStyleType] = useState<any>(undefined);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onStyleTypePress = (curry: any) => () => {
    setStyleType(curry);
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case 'React Native':
        return <ReactNative />;
      case 'DReactNativeStyles':
        return <DReactNativeStyles />;
      case 'DReactNative':
        return <DReactNative />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View className="px-3">
          <Button
            className="mt-2"
            children="React Native"
            onPress={onStyleTypePress('React Native')}
          />
          <Button
            className="mt-2"
            children="d-component-react-native"
            onPress={onStyleTypePress('DReactNative')}
          />
          <Button
            className="mt-2"
            children="d-component-react-native-styles"
            onPress={onStyleTypePress('DReactNativeStyles')}
          />
          {styleType ? (
            <TimedRender key={styleType}>
              <Text style={styles.text}>
                Rendering with <Text style={styles.bold}>{styleType}</Text>
              </Text>
            </TimedRender>
          ) : null}
          {renderStyleLibrary()}
          <InputDate />
          <TabView
            dataSource={[
              {key: '1', label: 'test'},
              {key: '2', label: 'new'},
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginVertical: 12,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
