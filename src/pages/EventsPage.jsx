import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
import Items from "../data/events.json";
import BasicCard from "../BasicCard";

class EventsPage extends Component {
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
                <ScrollView style={{height: '70%'}} contentContainerStyle={{alignItems: 'center', alignContent: 'center'}}>
                    {Items.items.map((item) => (
                        <BasicCard name={item.name} desc={item.desc}/>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default EventsPage;
