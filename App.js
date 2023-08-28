import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <WebView source={{uri: 'https://github.com/mdsomad'}} style={{flex: 1}} />
  );
};

export default App;
