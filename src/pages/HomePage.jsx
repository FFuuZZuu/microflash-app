import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Dimensions} from 'react-native';
import BasicCard from "../BasicCard";
import {Icon} from "native-base";
import {Header} from "react-native-elements";
import HomeData from '../data/home.json';

const {width, height} = Dimensions.get('window');
class HomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>}
                    centerComponent={<Image
                        source={require('../../assets/microflash-logo.png')}
                        style={{ width: 70, height: 30 }}
                    />}
                    rightComponent={<Text
                        style={{ width: '115%', paddingLeft: 10, borderLeftWidth: 1, fontSize: 12 }}>
                        Microflash New App
                    </Text>}
                />
                <View style={{ alignItems: 'center', padding: 15}}>
                    <Image
                        source={require('../../assets/microflash-logo.png')}
                        style={{ width: 190, height: 85 }}
                    />
                    <Text style={{fontSize: 30}}>Today at Microflash</Text>
                    <View>
                        <BasicCard name={HomeData.todayName} desc={HomeData.todayDesc}/>
                    </View>
                    <Text style={{fontSize: 30, padding: 5}}>Coming Soon</Text>
                    <View>
                        <BasicCard name={HomeData.name} desc={HomeData.desc}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomePage;
