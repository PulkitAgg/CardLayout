import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen } from '../components/Home.js';
import FirstDesign from '../components/FirstDesign.js';
import { View, Text, Button, Image } from "react-native";

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}


const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    FirstDesignScreen: {
      screen: FirstDesign,
    },
  },
  {
    initialRouteName: 'FirstDesignScreen',
    mode: 'card'
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);



// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   FirstDesignScreen: {
//     screen: FirstDesign
//   }
// }, {
//   initialRouteName: 'FirstDesignScreen',
//   mode: 'card'
// });

export default createAppContainer(RootStack);