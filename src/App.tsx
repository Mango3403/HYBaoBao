/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <WebView
      originWhitelist={['*']}
      source={{uri: 'https://www.zwzapp.com/dispatch.com'}}
    />
  );
};

export default App;
