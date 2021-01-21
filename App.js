import React, { Component } from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import MicroflashApp from "./src/MicroflashApp";

export default function App() {
    return (
        <SafeAreaProvider>
            <MicroflashApp />
        </SafeAreaProvider>
    )
}
