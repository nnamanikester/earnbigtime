import React, { Component } from "react";
import { View, Button } from "react-native";
import { AdMobBanner, AdMobInterstitial } from "expo-ads-admob";

AdMobInterstitial.setAdUnitID("ca-app-pub-7678502828694605/1136729064");

export default class SecondScreen extends Component {
  state = {
    isInterstitial: false,
  };

  loadInterstitial = async () => {
    try {
      this.setState({ isInterstitial: true });
      await AdMobInterstitial.requestAdAsync();
      await AdMobInterstitial.showAdAsync();
      setInterval(() => {
        this.props.navigation.navigate("EarnBigTime");
      }, 10000);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ isInterstitial: false });
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.loadInterstitial();
    }, 15000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-7678502828694605/6089866360"
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-7678502828694605/6089866360"
          />
        </View>
        <Button
          title="Load"
          disabled={this.isInterstitial}
          style={styles.button}
          onPress={() => this.loadInterstitial()}
        />
        <View style={{ marginTop: 20 }}>
          <AdMobBanner
            bannerSize="leaderboard"
            adUnitID="ca-app-pub-7678502828694605/6089866360"
          />
        </View>
      </View>
    );
  }
}

const styles = {
  button: {
    width: 30,
    height: 50,
    marginTop: 20,
  },
  container: {
    justifyContent: "center",
    padding: 20,
  },
};
