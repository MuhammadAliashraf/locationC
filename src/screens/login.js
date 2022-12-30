import React from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import Myinput from '../component/input';
import Mybutton from '../component/button';
import styles from '../../style';


function Login({ navigation }) {
    const [model, setmodel] = useState({})
    const userlogin = () => {
        auth().signInWithEmailAndPassword(model.email,model.password)
            .then((res) => {
                // console.log(res);
                // console.log(res.user.uid);
                navigation.navigate("Home", res.user.uid);
            })
            .catch((err) => {
               alert("Not Working");
            })
    }
    return (
        <>
            <View style={[styles.bgInfo, styles.h100, styles.flexCenter]}>
                <View style={[styles.p2, styles.w100]}>
                    <Myinput onChangeText={(e) => setmodel({ ...model, email: e })} label="Email" />
                </View>
                <View style={[styles.p2, styles.w100]}>
                    <Myinput onChangeText={(e) => setmodel({ ...model, password: e })} label="Passwords" />
                </View>
                <View style={[styles.p2, styles.w100]}>
                    <Mybutton
                        onPress={() =>userlogin()}
                        label="Login" />
                </View>
                <View style={[styles.flexCenter,]} >
                    <Text style={[styles.fs5, styles.textBlack]}>New User here!</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Signup')
                    }} >
                        <Text style={[styles.fs4, styles.textLight, styles.bgInfo, styles.p1, styles.rounded]} >Register!</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    );
};

export default Login;
