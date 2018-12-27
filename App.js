/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';

type Props = {};
export default class App extends Component<Props> {
  trendingArray() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => {
      return (<View key={index} style={styles.feedCard}>
        <View style={styles.feedHeading}>
          <Text>Trending Topics</Text>
          <Text>View All</Text>
        </View>
        <ScrollView horizontal={"true"} >
          <View style={styles.feedCardSwipe}>
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
            <View style={styles.feedCardData}>
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

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.05 }}>
          <Text style={styles.heading}>Explore</Text>
        </View>
        <View style={styles.cardLayout}>
          <View style={styles.LeftCard}>
            <Text> Hello</Text>
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


        <ScrollView style={{ flex: 1 }}>
          {this.trendingArray()}
          <View style={styles.feedCard}>
            <View style={styles.feedHeading}>
              <Text>Trending</Text>
              <Text>View All</Text>
            </View>
            <ScrollView horizontal={"true"} >
              <View style={styles.feedCardSwipe}>
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
                <View style={styles.feedCardData}>
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
            <ScrollView horizontal={"true"} >
              <View style={styles.feedCardSwipe}>
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
                <View style={styles.feedCardData}>
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
            <ScrollView horizontal={"true"} >
              <View style={styles.feedCardSwipe}>
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
                <View style={styles.feedCardData}>
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
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    flexWrap: 'wrap',
  },
  heading: {
    fontSize: 25
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
  },
  feedCard: {
    // flex: 2,
    // maxHeight: Dimensions.get('window').height / 5,
    // backgroundColor: 'skyblue',
    marginTop: 20,
    padding: 10,
    flexDirection: 'column'
  },
  feedHeading: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
