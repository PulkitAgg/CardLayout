/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import Dimensions from 'Dimensions';

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


type Props = {};
export default class FirstDesign extends Component<Props> {
  static navigationOptions = {
    title: 'Design Page',
    // headerTitle: <LogoTitle />,
    headerStyle: {
      backgroundColor: '#f4511e',
    },

  };


  trendingArray() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => {
      return (<View key={index} style={styles.feedCard}>
        <View style={styles.feedHeading}>
          <Text>Trending Topics</Text>
          <Text>View All</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={[styles.feedCardSwipe, styles.leftMargin]}>
            <View style={styles.feedCardData}>
              <Image
                style={styles.imageHolder}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.imageText}>YES</Text>
              </View>
            </View>

            <View style={styles.feedCardData}>
              <Image
                style={styles.imageHolder}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.imageText}>YES</Text>
              </View>
            </View>

            <View style={styles.feedCardData}>
              <Image
                style={styles.imageHolder}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.imageText}>YES</Text>
              </View>
            </View>

            <View style={styles.feedCardData}>
              <Image
                style={styles.imageHolder}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.imageText}>YES</Text>
              </View></View>
            <View style={[styles.feedCardData, styles.rightMargin]}>
              <Image
                style={styles.imageHolder}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.imageText}>YES</Text>
              </View></View>
          </View>
        </ScrollView>
      </View>
      )
    })
  }

  test() {
    console.warn('yes click');
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.05 }}>
          <Text style={styles.heading}>Explore</Text>
        </View>
        <View style={styles.cardLayout}>
          <View style={styles.LeftCard}>
            <Text onPress={() => this.test() }> Hello</Text>
          </View>
          <View style={styles.RightCard}>
            <View style={styles.RightFirstRowCard}>
              <View style={styles.firstCard}>
                <Text> Hello</Text>
              </View>
              <View style={styles.secondCard}>
                <Text> Hello</Text>
              </View>
            </View>
            <View style={styles.RightSecondRowCard}>
              <View style={styles.firstCard}>
                <Text> Hello</Text>
              </View>
              <View style={styles.secondCard}>
                <Text> Hello</Text>
              </View>
            </View>
          </View>
        </View>


        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {this.trendingArray()}
          <View style={styles.feedCard}>
            <View style={styles.feedHeading}>
              <Text>Trending</Text>
              <Text>View All</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={[styles.feedCardSwipe, styles.leftMargin]}>
                <View style={styles.feedCardData}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View>
                </View>

                <View style={styles.feedCardData}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View>
                </View>

                <View style={styles.feedCardData}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View>
                </View>

                <View style={styles.feedCardData}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View></View>
                <View style={[styles.feedCardData, styles.rightMargin]}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View></View>
              </View>
            </ScrollView>
          </View>


          <View style={styles.feedCard}>
            <View style={styles.feedHeading}>
              <Text>Trending</Text>
              <Text>View All</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={[styles.feedCardSwipe, styles.leftMargin]}>
                <View style={styles.feedCardData}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View>
                </View>

                <View style={styles.feedCardData}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View>
                </View>

                <View style={styles.feedCardData}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View>
                </View>

                <View style={styles.feedCardData}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View></View>
                <View style={[styles.feedCardData, styles.rightMargin]}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View></View>
              </View>
            </ScrollView>
          </View>



          <View style={styles.feedCard}>
            <View style={styles.feedHeading}>
              <Text>Trending</Text>
              <Text>View All</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={[styles.feedCardSwipe, styles.leftMargin]}>
                <View style={styles.feedCardData}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View>
                </View>

                <View style={styles.feedCardData}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View>
                </View>

                <View style={styles.feedCardData}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View>
                </View>

                <View style={styles.feedCardData}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View></View>
                <View style={[styles.feedCardData, styles.rightMargin]}>
                  <Image
                    style={styles.imageHolder}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.imageText}>YES</Text>
                  </View></View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    // backgroundColor: 'grey',
    paddingTop: 10,
    // paddingLeft: 20,
    // paddingRight: 20,
    paddingBottom: 20,
    flexWrap: 'wrap',
  },
  heading: {
    fontSize: 25,
    paddingLeft: 10,
  },
  cardLayout: {
    flex: 0.2,
    marginTop: 10,
    // backgroundColor: 'lightgreen',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LeftCard: {
    flex: 0.33,
    backgroundColor: 'red',
    margin: 10,
    marginRight: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RightCard: {
    flex: 0.67,
    // backgroundColor: 'yellow',
    marginLeft: 5,
    margin: 10,
    borderRadius: 15,
    flexDirection: 'column',
  },
  RightFirstRowCard: {
    flex: 1,
    // backgroundColor: 'cyan',
    borderRadius: 15,
    marginBottom: 5,
    flexDirection: 'row',

  },
  RightSecondRowCard: {
    flex: 1,
    // backgroundColor: 'blue',
    borderRadius: 15,
    marginTop: 5,
    flexDirection: 'row',
  },
  firstCard: {
    flex: 1,
    backgroundColor: 'skyblue',
    marginRight: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondCard: {
    flex: 1,
    backgroundColor: 'steelblue',
    marginLeft: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  feedCard: {
    // flex: 2,
    // maxHeight: Dimensions.get('window').height / 5,
    // backgroundColor: 'skyblue',
    marginTop: 20,
    // padding: 10,
    flexDirection: 'column'
  },
  leftMargin: {
    marginLeft: 20,
  },
  rightMargin: {
    marginRight: 20,
  },
  feedHeading: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor: 'red'
  },
  feedCardSwipe: {
    // flex: 1,
    marginTop: 10,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feedCardData: {
    // flex: 1,
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
    // margin: 5,
    width: 80

  },
  imageHolder: {
    margin: 5,
    height: 70,
    width: 70,
    borderRadius: 15
  },
  imageText: {
    margin: 5,
  }
});
