import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export class homeScreen extends Component {
    constructor(props) {
        super(props);
        // this.goto = this.goto.bind(this)
    }
    goto() {
        this.props.navigation.navigate('AboutUs');
    }
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
                <View>
                    <View>
                    <Text style={{ color: '#000' , fontSize:25, alignSelf:"center", marginTop:20}}>The library is the temple of learning, and 
                    learning has liberated more people than all the wars in history.</Text>
                    <Text style={{ color: '#000' , fontSize:25, alignSelf:"center", marginTop:20}}></Text>
                    </View>
                    <View>
                        <Image style={[styles.img, {height:250, borderRadius:20, marginBottom:10, }]} source={require('../assets/hello1.jpg')} />
                        <Text style={{ color: '#000' , fontSize:25, alignSelf:"center", marginTop:20}}>The library is the temple of learning, and 
                        learning has liberated more people than all the wars in history.</Text>
                    <Text style={{ color: '#000' , fontSize:25, alignSelf:"center", marginTop:20}}>If you want to get laid, go to college.</Text>
                        <Image style={[styles.img, {height:250, borderRadius:20, marginBottom:10, }]} source={require('../assets/hello2.jpg')} />
                        <Text style={{alignSelf:"center", fontSize:18}}>
                        The library is the temple of learning, and learning has liberated more people than all the wars in history.
                            </Text>
                        <Image style={[styles.img, {height:250, borderRadius:20, marginBottom:10, }]} source={require('../assets/hello3.jpg')} />
                        <Text style={{alignSelf:"center", fontSize:18}}>
                        The library is the temple of learning, and learning has liberated more people than all the wars in history.
                            </Text>
                        <Image style={[styles.img, {height:250, borderRadius:20, marginBottom:10, }]} source={require('../assets/hello4.jpg')} />
                        <Text style={{alignSelf:"center", fontSize:18}}>
                        The library is the temple of learning, and learning has liberated more people than all the wars in history.
                            </Text>

                    </View>

                </View>

            </View></ScrollView>

        )
    }
}
const styles = StyleSheet.create({
    logo: {
        height: 40,
        width: 60,
        marginRight:-15,
    },
    img: {
        alignSelf: 'center',
        marginTop:10,
        width:350,
        height:250,
        marginBottom:30,
    },
    btnTest: {
        marginTop:10,
        width: "80%",
        height: 40,
        paddingTop:10,
        textAlign:"center",
        backgroundColor:"grey",
        borderRadius:20,
        alignSelf:"center"
    },
    logoText: {
        marginRight: 10,
        //   width:"75%",
        paddingTop:10,
        color: "#FFF",
        textAlign: 'right',
        flex: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
    },
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
export default homeScreen
