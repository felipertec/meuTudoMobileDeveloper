import React from "react";
import { Text, View } from 'react-native';
import { BatLogo } from "../components/BatLogo/BatLogo";
import { StatusBar } from 'expo-status-bar';
import {styles} from './Style'
import BatTextInput from "../components/BatTextInput/BatTextInput";
import { BatButton } from "../components/BatButton/BatButton";

export default function Home(){
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>


            <View style={styles.inputContainer}>
                <BatButton />
            </View>
            <StatusBar style="light"/>
        </View>
    )
}
