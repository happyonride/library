import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';


export class detailsScreen extends Component {
    render() {
        return (
            <ScrollView>
          <View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.hamburger} onPress={() => this.props.navigation.toggleDrawer()}>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEvenMid} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        
                    </TouchableOpacity >
                    <View style={styles.logoMain}>
                        <Text style={styles.logoText}>
                        Library Management
                        
                        </Text>
                        <Image style={styles.logo} source={require('../assets/logo.png')} />
                    </View>
                </View>
                <Text>
                     
                 </Text>
                
                <Text style={{color:'#000'}}>The National Library of India on the Belvedere Estate in Alipore, Kolkata,
                 is the largest library in India by volume, and India's library of public record. It is under the Ministry of Culture, Government of India. 
                 The library is designated to collect, disseminate and preserve printed material produced in India. The library is situated on the scenic 30-acre. Belvedere Estate. It is the largest in India with a collection in excess of 2.2 million books.[6] Before independence,
                 it was the official residence of Governor-General of India.</Text>
                 <Text>

                 </Text>
                 
                 <View>
                 <Image style={[styles.img, {height:250, borderRadius:20, marginBottom:10, }]} source={require('../assets/India_Education.jpg')} />
                 </View>
                 <View>
                 <Image style={[styles.img, {height:250, borderRadius:20, marginBottom:10, }]} source={require('../assets/hello1.jpg')} />
                 </View>
                 <View>
                 <Image style={[styles.img, {height:250, borderRadius:20, marginBottom:10, }]} source={require('../assets/hello2.jpg')} />
                 </View>
                 <View>
                 <Image style={[styles.img, {height:250, borderRadius:20, marginBottom:10, }]} source={require('../assets/hello3.jpg')} />
                 </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    logoText: {
        marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: 'right',
        flex: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
    },
    img: {
        alignSelf: 'center',
        marginTop:10,
        width:350,
        height:250,
        marginBottom:30,
    },
    logo: {
        height: 40,
        width: 60,
        marginRight:-15},
    header: {
        height: 40,
        marginBottom: 5,
        marginTop: 10,
        backgroundColor:"lightgrey",
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoMain: {
        flexDirection: 'row',
        flex: 12,
        marginRight: 15,
        // backgroundColor:'#FFF'
    },
    hamburger: {
        // width:"25%",
        flex: 1,
        color: '#FFF',
        margin: 5,
        marginLeft: 15,
        marginRight: 10,
        flexDirection: 'column',
        justifyContent: 'center'
        // right:10
    },
    hamburgerOdd: {
        flex: 3
    },
    hamburgerEven: {
        flex: 2,
        backgroundColor: '#FFF'
    },
    hamburgerEvenMid: {
        flex: 2,
        width: '100%',
        // marginLeft: '',
        backgroundColor: '#FFF'
    },
})

export default detailsScreen
