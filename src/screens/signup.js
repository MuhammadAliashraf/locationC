import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import Myinput from '../component/input';
import Mybutton from '../component/button';
import styles from '../../style';

function Signup({ navigation }) {
    const [model, setmodel] = useState({});
    const signupuser = () => {

        auth().createUserWithEmailAndPassword(model.email, model.password)
            .then((res) => {
                // Signed in 
                // console.log("Done")
                // navigation.navigate("Home");
                console.log(res.user.uid);
                // const user = userCredential.user;
                // ...
                database().ref('Appuser')
                    .set(model)
                    .then(() => {
                        console.log("Data Is Send to Date base")
                        navigation.navigate("Home", res.user.uid);
                        // navigation.navigate('Login', res.user.uid);
                    })
                    .catch(() => {
                        console.log("Not Working")
                    })
            })
            .catch((error) => {
                alert("Not Done")
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });

    }
    return (
        <>
            <View style={[styles.bgInfo, styles.flexCenter, styles.h100]} >
                <Text>Signup</Text>
                <View style={[styles.p2, styles.w100]} >
                    <Myinput onChangeText={(e) => setmodel({ ...model, userName: e })} label="UserName" />
                </View>
                <View style={[styles.p2, styles.w100]} >
                    <Myinput onChangeText={(e) => setmodel({ ...model, email: e })} label="Email" />
                </View>
                <View style={[styles.p2, styles.w100]} >
                    <Myinput onChangeText={(e) => setmodel({ ...model, password: e })} label="Passwords" />
                </View>
                <View style={[styles.p2, styles.w100]} >
                    <Mybutton
                        onPress={() => signupuser()}
                        label="Signup" />
                </View>
                <View style={[styles.flexCenter,]} >
                    <Text style={[styles.fs5, styles.textBlack]}>Already Have An Account!</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Login")
                    }} >
                        <Text style={[styles.fs4, styles.textLight, styles.bgInfo, styles.p1, styles.rounded]} >Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default Signup;
