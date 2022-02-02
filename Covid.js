import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class Covid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        };
    }
    componentDidMount() {
        return fetch('https://api.covid19api.com/summary')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.Countries
                })
            })
    }
    render() {
        if (this.state.isLoading == true) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            );
        }
        else {
            let statewise = this.state.dataSource.map((val, key) => {
                return (
                    <View key={key}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textformat}>{val.Country}</Text>
                            <Text style={styles.confirmStyle}>{val.TotalConfirmed}</Text>
                            <Text style={styles.activeStyle}>{val.NewConfirmed}</Text>
                            <Text style={styles.deathStyle}>{val.TotalDeaths}</Text>
                            <Text style={styles.recoverStyle}>{val.TotalRecovered}</Text>
                            <Text style={styles.text}>{val.Date}</Text>
                        </View>
                    </View>
                );
            });

            return (
                <ScrollView>
                    <ScrollView horizontal>
                        <View style={styles.container}>
                            <View style={styles.textContainer}>
                                <Text style={styles.textformat}> COUNTRY</Text>
                                <Text style={styles.confirmStyle}>CONFIRMED</Text>
                                <Text style={styles.activeStyle}>ACTIVE </Text>
                                <Text style={styles.deathStyle}>DEATH</Text>
                                <Text style={styles.recoverStyle}>RECOVERED</Text>
                                <Text style={styles.text}>LAST UPDATED</Text>
                            </View>
                            {statewise}
                        </View>
                    </ScrollView>
                </ScrollView>
            );
        }
    }
}
const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#000',
            flex: 1,
            margin: 10,
            justifyContent: 'center'

        },
        textContainer: {
            backgroundColor: '#000',
            flexDirection: 'row',
            justifyContent: 'space-between'

        },
        confirmStyle:
        {
            fontSize: 24,
            width: 160,
            color: '#bf0a1f'
        },
        activeStyle:
        {
            fontSize: 24,
            width: 160,
            color: '#20318a'
        },
        deathStyle:
        {
            fontSize: 24,
            width: 160,
            color: '#630101'
        },
        recoverStyle:
        {
            fontSize: 24,
            width: 160,
            color: '#1a961e'
        },
        textformat:
        {
            width: 180,
            fontSize: 24,
            color: '#fff'
        },
        text:
        {
            fontSize: 24,
            width: 180,
            color: '#fff'
        }
    }
);