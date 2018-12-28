import React from "react";
import { View, Text, Button, Image} from "react-native";

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
      style={{ width: 30, height: 30 }}
      source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
    />
    );
  }
}


export class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#aaa"
        />
      ),
      /* the rest of this config is unchanged */
    };
  };

  // static navigationOptions = {
  //   // title: 'Home',
  //   headerTitle: <LogoTitle />,
  //   headerRight: (
  //     <Button
  //       onPress={() => alert('This is a button!')}
  //       title="Info"
  //       color="#aaa"
  //     />
  //   ),
  // };

  componentDidMount() {
    const didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      payload => {
        console.warn('didBlur', payload);
      }
    );
  }

  componentWillUnmount() {
    // didBlurSubscription.remove();
  }
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text onPress={() => this.props.navigation.navigate('FirstDesignScreen') }>Home Screen</Text>
      </View>
    );
  }
}
