/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import './src/designSystem/AssetIcon'
import './src/designSystem/ColorStyle'
import './src/designSystem/TextStyle'
import {store} from './src/redux/store'
import RootStack from './src/screens/nav/RootStack';


const App = () => {
    return (
        <Provider store={store}>
            <RootStack></RootStack>
        </Provider>
    );
}
AppRegistry.registerComponent(appName, () => App);
