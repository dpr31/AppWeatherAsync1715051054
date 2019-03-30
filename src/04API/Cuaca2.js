import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, ActivityIndicator, Image } from 'react-native';

import Header from './Header';
import Footer from "./Footer";

const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temperature.png');
const mainIcon = require('./img/sunny.png');
const seaIcon = require('./img/sea.png');
const sunsetIcon = require ('./img/sunset.png');
const sunriseIcon = require ('./img/sunrise.png');
const pressIcon = require('./img/pressure.png');
const humadityIcon = require('./img/humadity.png');
const groundIcon = require('./img/soil.png');

export default class Cuaca2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            forecast: {
                main: '',
                description: '',
                temp: 0,
                sunrise: 0,
                sunset: 0,
                pressure: 0,
                humadity: 0,
                sea_level: 0,
                grnd_level: 0,
                speed: 0,
                loading: false,
            }
        };
    }
    async getWeather() {

        try {
            this.setState({loading: true });
            let response = await fetch(
                'http://api.openweathermap.org/data/2.5/weather?q=' 
                + this.state.city + 
                '&appid=f40c530ff14ccd93d819b153b2265134&units=metric'
            );

            let responseJson = await response.json();
            return this.setState({
                loading: false,
                forecast: {
                    main: responseJson.weather[0].main,
                    description: responseJson.weather[0].description,
                    temp: responseJson.main.temp,
                    sunrise: responseJson.sys.sunrise,
                    sunset: responseJson.sys.sunset,
                    pressure: responseJson.main.pressure,
                    humidity: responseJson.main.humadity,
                    sea_level: responseJson.main.sea_level,
                    grnd_level: responseJson.main.grnd_level,
                    speed: responseJson.wind.speed
                }
            });
        } catch (error) {
            console.error(error);
            this.setState({loading: false });
        }
    }


    render() {
        return (
            <View style={styles.containerMain}>
                <Header judul={"PRAKIRAAN CUACA"} />
                <View style={styles.box1}>
                    <Text style={styles.textKota}> Masukan Nama Kota </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder=" Masukan Nama Kota "
                        onChangeText={(city) => this.setState({ city })}
                    />
                    <TouchableHighlight
                        style={styles.buttonStyle}
                        onPress={() => this.getWeather()}
                    >
                        {
                            this.state.loading ? <ActivityIndicator color="#fff" size="large" style={styles.loadingStyle} />
                                : <Text style={{ color: '#fff' }}>Lihat</Text>
                        }
                    </TouchableHighlight>
                </View>

                <View style={styles.box2}>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={tempIcon} style={styles.icon} />
                        </View>
                        <Text> Temp : {this.state.forecast.temp} </Text>
                    </View>

                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={windIcon} style={styles.icon} />
                        </View>
                        <Text> Wind Speed : {this.state.forecast.speed} </Text>
                    </View>
                </View>

                <View style={styles.box2}>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={mainIcon} style={styles.icon} />
                        </View>
                        <Text> Main : {this.state.forecast.main} </Text>
                    </View>
                    
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={mainIcon} style={styles.icon} />
                        </View>
                        <Text> Main Desc : {this.state.forecast.description} </Text>
                    </View>
                </View>

                <View style={styles.box2}>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={sunriseIcon} style={styles.icon} />
                        </View>
                        <Text> Sunrise : {this.state.forecast.sunrise} </Text>
                    </View>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={sunsetIcon} style={styles.icon} />
                        </View>
                        <Text> Sunset : {this.state.forecast.sunset} </Text>
                    </View>
                </View>

                <View style={styles.box2}>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={pressIcon} style={styles.icon} />
                        </View>
                        <Text> Pressure : {this.state.forecast.pressure} </Text>
                    </View>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={humadityIcon} style={styles.icon} />
                        </View>
                        <Text> Humadity : {this.state.forecast.humadity} </Text>
                    </View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={seaIcon} style={styles.icon} />
                        </View>
                        <Text> Sea Level : {this.state.forecast.sea_level} </Text>
                    </View>
                    <View style={styles.boxHasil}>
                    <View style={styles.iconContainer}>
                            <Image source={groundIcon} style={styles.icon} />
                        </View>
                        <Text> Ground Level : {this.state.forecast.grnd_level} </Text>
                    </View>
                </View>
                
                <Footer judul={"Copyright @DWIPRANATA 2019"} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    containerMain: {
        backgroundColor: 'white',
        flex: 1,
    },

    box1: {
        flex: 1,
        backgroundColor: '#33FFCC',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 30,
        paddingBottom: 15,
    },

    box2: {
        flex: 0.4,
        backgroundColor: '#33FFCC',
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },

    boxHasil: {
        width: 150,
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'CCCCCC',
        flexDirection: 'row',
        paddingRight: 25,
     
        
    },
    buttonStyle: {
        backgroundColor: '#66CCFF',
        height: 40,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textKota: {
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 20,
        color: 'black',
    },
    textInput: {
        height: 40,
        color: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        paddingLeft: 10,

    },
      loadingStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },

  iconContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 50,
    width: 50,

},
icon: {
  
    height: 35,
    width: 35,
},
});