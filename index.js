/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/designSystem/AssetIcon'
import './src/designSystem/ColorStyle'
import './src/designSystem/TextStyle'
import RootStack from './src/screens/nav/RootStack';

AppRegistry.registerComponent(appName, () => RootStack);
