import React, { useState, useEffect, useRoute } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

//
import { FontAwesome, Ionicons } from '@expo/vector-icons';

// ONBOARDING
//import SignInScreen from 'src/screens/SignInScreen';
//import SignUpScreen from 'src/screens/SignUpScreen';
import SignInScreen from 'src/screens/Experience/ChatioSignInScreen';
import SignUpScreen from 'src/screens/Experience/ChatioSignUpScreen';
import WelcomeScreen from 'src/screens/Experience/ChatioWelcomeScreen';
import AccountScreen from 'src/screens/AccountScreen';

// LEGACY
import IndexScreen from 'src/screens/IndexScreen';
import ShowScreen from 'src/screens/ShowScreen';
import CreateScreen from 'src/screens/CreateScreen';
import EditScreen from 'src/screens/EditScreen';

// HOME
import HomeScreen from 'src/screens/HomeScreen';

// FOLLOWSHIP
import IndexFollowshipScreen from 'src/screens/IndexFollowshipScreen';
import ShowFollowshipScreen from 'src/screens/ShowFollowshipScreen';
import CreateFollowshipScreen from 'src/screens/CreateFollowshipScreen';
import EditFollowshipScreen from 'src/screens/EditFollowshipScreen';

// THREAD
import IndexThreadScreen from 'src/screens/IndexThreadScreen';
import ShowThreadScreen from 'src/screens/ShowThreadScreen';
import CreateThreadScreen from 'src/screens/CreateThreadScreen';
import EditThreadScreen from 'src/screens/EditThreadScreen';

// MESSAGE
import IndexMessageScreen from 'src/screens/IndexMessageScreen';
import ShowMessageScreen from 'src/screens/ShowMessageScreen';
import CreateMessageScreen from 'src/screens/CreateMessageScreen';
import EditMessageScreen from 'src/screens/EditMessageScreen';

// PROFILE
import IndexProfileScreen from 'src/screens/IndexProfileScreen';
import ShowProfileScreen from 'src/screens/ShowProfileScreen';
import CreateProfileScreen from 'src/screens/CreateProfileScreen';
import EditProfileScreen from 'src/screens/EditProfileScreen';

// SEARCH
import DiscoverScreen from 'src/screens/DiscoverScreen';
import SearchScreen from 'src/screens/SearchScreen';
import ResultsShowScreen from 'src/screens/ResultsShowScreen';

// CHATS
import ChatScreen from 'src/screens/Experience/ChatioChatScreen';
import ChatsScreen from 'src/screens/Experience/ChatioChatsScreen';
import ComposeScreen from 'src/screens/Experience/ChatioComposeScreen';

// PEOPLE
import ProfileScreen from 'src/screens/Experience/ChatioProfileScreen';
import PeopleScreen from 'src/screens/Experience/ChatioPeopleScreen';

//
import { Provider as AuthProvider } from 'src/context/AuthContext';
import { Provider as FollowshipProvider } from 'src/context/FollowshipContext';
import { Provider as ProfileProvider } from 'src/context/ProfileContext';
import { Provider as ThreadProvider } from 'src/context/ThreadContext';
import { Provider as MessageProvider } from 'src/context/MessageContext';
import { setNavigator } from 'src/navigationRef';
import ResolveAuthScreen from 'src/screens/ResolveAuthScreen';

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
  title: 'Chatio'

  }
});

//
const onboardingStack = createStackNavigator({
  Welcome: WelcomeScreen,
  SignUp: SignUpScreen,
  SignIn: SignInScreen,
});

//
const homeStack = createStackNavigator({
  Home: HomeScreen,
  Account: AccountScreen
});

//
const discoverStack = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
  Discover: DiscoverScreen,
});

//
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

// CHAT
const chatStack = createStackNavigator({

  //
  Chats: ChatsScreen,
  Chat: ChatScreen,
  Compose: ComposeScreen,
  People: PeopleScreen,
  Profile: ProfileScreen,
  Account: AccountScreen,

});

// PEOPLE
const peopleStack = createStackNavigator({

  People: PeopleScreen,
  Profile: ProfileScreen,
  Compose: ComposeScreen,
  Chat: ChatScreen,
  Account: AccountScreen,

});

//
const profileStack = createStackNavigator({

  People: PeopleScreen,

  IndexProfile: IndexProfileScreen,
  ShowProfile: ShowProfileScreen,
  CreateProfile: CreateProfileScreen,
  EditProfile: EditProfileScreen,

  IndexFollowship: IndexFollowshipScreen,
  ShowFollowship: ShowFollowshipScreen,
  CreateFollowship: CreateFollowshipScreen,
  EditFollowship: EditFollowshipScreen,

  Home: HomeScreen,

});

//
const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  onboardingFlow: createStackNavigator({
    onboardingStack,
  }),
  experienceFlow: createBottomTabNavigator({
    //homeStack,
    //discoverStack,
    //inboxStack,
    //profileStack,
    chatStack,
    peopleStack,
  }),
});

//
homeStack.navigationOptions = { title: 'Home', tabBarIcon: <FontAwesome name="home" size={20} /> };
discoverStack.navigationOptions = { title: 'Discover', tabBarIcon: <FontAwesome name="search" size={20} /> };
inboxStack.navigationOptions = { title: 'Inbox', tabBarIcon: <FontAwesome name="comments" size={20} /> };
profileStack.navigationOptions = { title: 'Me', tabBarIcon: <Ionicons name="md-person" size={20} /> };

onboardingStack.navigationOptions = { header: null, title: 'onboarding', tabBarIcon: <FontAwesome name="users" size={20} /> };

chatStack.navigationOptions = { tabBarVisible: true, title: 'Chats', tabBarIcon: <FontAwesome name="comments" size={20} /> };
peopleStack.navigationOptions = { title: 'People', tabBarIcon: <FontAwesome name="users" size={20} /> };

//
WelcomeScreen.navigationOptions = {
  title: 'Welcome',
  header: null,
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

//
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
