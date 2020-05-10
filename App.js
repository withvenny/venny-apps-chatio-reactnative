import React, {useState, useEffect} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

//
import { FontAwesome } from '@expo/vector-icons';

// ONBOARDING
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AccountScreen from './src/screens/AccountScreen';

// LEGACY
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

// HOME
import HomeScreen from './src/screens/HomeScreen';

// FOLLOWSHIP
import IndexFollowshipScreen from './src/screens/IndexFollowshipScreen';
import ShowFollowshipScreen from './src/screens/ShowFollowshipScreen';
import CreateFollowshipScreen from './src/screens/CreateFollowshipScreen';
import EditFollowshipScreen from './src/screens/EditFollowshipScreen';

// THREAD
import IndexThreadScreen from './src/screens/IndexThreadScreen';
import ShowThreadScreen from './src/screens/ShowThreadScreen';
import CreateThreadScreen from './src/screens/CreateThreadScreen';
import EditThreadScreen from './src/screens/EditThreadScreen';

// MESSAGE
import IndexMessageScreen from './src/screens/IndexMessageScreen';
import ShowMessageScreen from './src/screens/ShowMessageScreen';
import CreateMessageScreen from './src/screens/CreateMessageScreen';
import EditMessageScreen from './src/screens/EditMessageScreen';

// PROFILE
import IndexProfileScreen from './src/screens/IndexProfileScreen';
import ShowProfileScreen from './src/screens/ShowProfileScreen';
import CreateProfileScreen from './src/screens/CreateProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';

// SEARCH
import DiscoverScreen from './src/screens/DiscoverScreen';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

//
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as FollowshipProvider } from './src/context/FollowshipContext';
import { Provider as ProfileProvider } from './src/context/ProfileContext';
import { Provider as ThreadProvider } from './src/context/ThreadContext';
import { Provider as MessageProvider } from './src/context/MessageContext';
import { setNavigator } from 'src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';


//
const navigator = createStackNavigator({

  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen,

  IndexFollowship: IndexFollowshipScreen,
  ShowFollowship: ShowFollowshipScreen,
  CreateFollowship: CreateFollowshipScreen,
  EditFollowship: EditFollowshipScreen,

  IndexThread: IndexThreadScreen,
  ShowThread: ShowThreadScreen,
  CreateThread: CreateThreadScreen,
  EditThread: EditThreadScreen,

  IndexMessage: IndexMessageScreen,
  ShowMessage: ShowMessageScreen,
  CreateMessage: CreateMessageScreen,
  EditMessage: EditMessageScreen,

  IndexProfile: IndexProfileScreen,
  ShowProfile: ShowProfileScreen,
  CreateProfile: CreateProfileScreen,
  EditProfile: EditProfileScreen,

  Home: HomeScreen,

},{

  initialRouteName: 'Home',
  defaultNavigationOptions: {
  title: 'The NTRL Co.'

  }
});

const onboardingStack = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
});

const homeStack = createStackNavigator({
  Home: HomeScreen,
  Account: AccountScreen
});

const discoverStack = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
  Discover: DiscoverScreen,
});

const inboxStack = createStackNavigator({
  IndexThread: IndexThreadScreen,
  ShowThread: ShowThreadScreen,
  CreateThread: CreateThreadScreen,
  EditThread: EditThreadScreen,
  IndexMessage: IndexMessageScreen,
  ShowMessage: ShowMessageScreen,
  CreateMessage: CreateMessageScreen,
  EditMessage: EditMessageScreen,
});

//
const profileStack = createStackNavigator({

  IndexFollowship: IndexFollowshipScreen,
  ShowFollowship: ShowFollowshipScreen,
  CreateFollowship: CreateFollowshipScreen,
  EditFollowship: EditFollowshipScreen,

  IndexProfile: IndexProfileScreen,
  ShowProfile: ShowProfileScreen,
  CreateProfile: CreateProfileScreen,
  EditProfile: EditProfileScreen,

  Home: HomeScreen,

});

//
const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  onboardingFlow: createStackNavigator({
    onboardingStack,
  }),
  experienceFlow: createBottomTabNavigator({
    homeStack,
    discoverStack,
    inboxStack,
    profileStack
  }),
});

homeStack.navigationOptions = { title: 'Home', tabBarIcon: <FontAwesome name="home" size={20} /> };
discoverStack.navigationOptions = { title: 'Discover', tabBarIcon: <FontAwesome name="search" size={20} /> };
inboxStack.navigationOptions = { title: 'Inbox', tabBarIcon: <FontAwesome name="comments" size={20} /> };
profileStack.navigationOptions = { title: 'Me', tabBarIcon: <FontAwesome name="users" size={20} /> };

SignUpScreen.navigationOptions = {
  title: 'Welcome',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

const App = createAppContainer(switchNavigator);

export default () => {
  
  return (
    <FollowshipProvider>
      <ProfileProvider>
        <ThreadProvider>
          <MessageProvider>
            <AuthProvider>
              <App ref={ navigator => { setNavigator(navigator); } }/>
            </AuthProvider>
          </MessageProvider>
        </ThreadProvider>
      </ProfileProvider>
    </FollowshipProvider>
  );
};
