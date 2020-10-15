import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings143307Navigator from '../features/Settings143307/navigator';
import Settings143292Navigator from '../features/Settings143292/navigator';
import NotificationList143291Navigator from '../features/NotificationList143291/navigator';
import Maps143290Navigator from '../features/Maps143290/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings143307: { screen: Settings143307Navigator },
Settings143292: { screen: Settings143292Navigator },
NotificationList143291: { screen: NotificationList143291Navigator },
Maps143290: { screen: Maps143290Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
