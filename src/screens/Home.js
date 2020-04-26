import React, { Component } from 'react';
import { View, Button } from "react-native";
import { AdMobBanner, AdMobInterstitial } from "expo-ads-admob"

AdMobInterstitial.setAdUnitID('ca-app-pub-9699079901863001/4503003288');
// AdMobInterstitial.setTestDeviceID('EMULATOR')

export default class HomeScreen extends Component {
  state = {
    isInterstitial: false
  }

  loadInterstitial = async () => {
    try {
      this.setState({ isInterstitial: true })
      await AdMobInterstitial.requestAdAsync();
      await AdMobInterstitial.showAdAsync();
      setInterval(() => {
        this.props.navigation.navigate("Second");
      }, 10000);
    }
    catch (e) {
      console.log(e);
    } finally {
      this.setState({ isInterstitial: false });
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.loadInterstitial();
    }, 15000)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-9699079901863001/1720927270"
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-9699079901863001/9046605722"
          />
        </View>
        <Button title="Load" disabled={this.isInterstitial} style={styles.button} onPress={() => this.loadInterstitial()} />
        <View style={{ marginTop: 20 }}>
          <AdMobBanner
            bannerSize="leaderboard"
            adUnitID="ca-app-pub-9699079901863001/7584462197"
          />
        </View>
      </View>
    );
  }
}
// ca-app-pub-9699079901863001/1720927270 -> my-banner
// ca-app-pub-9699079901863001/9046605722 -> my-banner-1
// ca-app-pub-9699079901863001/7584462197 -> my-banner-2
// ca-app-pub-9699079901863001/9547446409 -> my-interstitial
// ca-app-pub-9699079901863001/4503003288 -> my-interstitial-1
// ca-app-pub-9699079901863001/3189921612 -> my-interstitial-2

const styles = {
  button: {
    width: 30,
    height: 50,
    marginTop: 20
  },
  container: {
    justifyContent: "center",
    padding: 20
  }
}