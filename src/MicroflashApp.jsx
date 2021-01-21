import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';

const CustomDrawerNavigation = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ paddingTop: 24 }}>
                <DrawerItems {...props} />
            </ScrollView>
        </SafeAreaView>
    );
}

const {width, height} = Dimensions.get('window');
const Drawer = createDrawerNavigator({
        Home: {
            screen: HomePage,
            navigationOptions: {
                title: 'Home Page'
            }
        },
        EventsPage: {
            screen: EventsPage,
            navigationOptions: {
                title: 'Events Page'
            }
        }
    },
    {
        drawerPosition: 'left',
        contentComponent: CustomDrawerNavigation,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerWidth: (width / 3) * 2
    });

const MicroflashApp = createAppContainer(Drawer);

export default MicroflashApp;
