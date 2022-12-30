import React from 'react';
import { Button, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from '../../style';
import Geolocation from "@react-native-community/geolocation"
import { useState } from 'react';
import { useEffect } from 'react';
function Home() {
    const [load, setload] = useState(true)
    const [model, setmodel] = useState({})
    Geolocation.getCurrentPosition(e => setmodel(e))
    useEffect(()=>{
        console.log(model.coords)
    },[])

    return <>
        <View>
            <View style={[styles.flexCenter, styles.mt3]} >
                <TouchableOpacity style={[styles.btn, styles.bgSuccess,
                ]} onPress={() => getinfo()} >
                    <Text style={[styles.fs1, styles.textCenter, styles.textWhite]}  >Get My Location</Text>
                </TouchableOpacity>
            </View>
            {/* <Text style={[styles.fs1, styles.textCenter, styles.mt5, styles.textBlack]}>Your Location</Text>  */}
            {/* <View  style={[styles.bgInfo
                , styles.rounded,
            styles.m2, styles.p2,
            styles.alignItemsStart
            ]} >
                <Text style={[styles.fs5, styles.textCenter, styles.mt2, styles.textWhite]}>Accuracy:{model.coords.accuracy}</Text>
                <Text style={[styles.fs5, styles.textCenter, styles.mt1, styles.textWhite]}>latitude:{model.coords.latitude}</Text>
                <Text style={[styles.fs5, styles.textCenter, styles.mt1, styles.textWhite]}>altitude:{model.coords.altitude}</Text>
                <Text style={[styles.fs5, styles.textCenter, styles.mt1, styles.textWhite]}>longitude:{model.coords.longitude}</Text>
                <Text style={[styles.fs5, styles.textCenter, styles.mt1, styles.textWhite]}>speed:{model.coords.speed}</Text>
            </View> */}
        </View>
    </>
}

export default Home;