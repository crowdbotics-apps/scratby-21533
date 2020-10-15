import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings143366Navigator from '../features/Settings143366/navigator';
import Settings143351Navigator from '../features/Settings143351/navigator';
import NotificationList143350Navigator from '../features/NotificationList143350/navigator';
import Maps143349Navigator from '../features/Maps143349/navigator';
import UserProfile143348Navigator from '../features/UserProfile143348/navigator';
import Maps143329Navigator from '../features/Maps143329/navigator';
import Settings143307Navigator from '../features/Settings143307/navigator';
import Settings143292Navigator from '../features/Settings143292/navigator';
import NotificationList143291Navigator from '../features/NotificationList143291/navigator';
import Maps143290Navigator from '../features/Maps143290/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings143366: { screen: Settings143366Navigator },
Settings143351: { screen: Settings143351Navigator },
NotificationList143350: { screen: NotificationList143350Navigator },
Maps143349: { screen: Maps143349Navigator },
UserProfile143348: { screen: UserProfile143348Navigator },
Maps143329: { screen: Maps143329Navigator },
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
