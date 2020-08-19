import React from 'react';
import {Platform, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Calender from "./Calender";
import Demo from "./Demo";
import TimelineDemo from "./Timeline";
import { Avatar } from 'react-native-image-avatars';
import { NavigationBar } from 'navigationbar-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

    return (
        // <ScrollView stickyHeaderIndices={[0]}
        //             showsVerticalScrollIndicator={true}>
        //     <View style={styles.headerBar}></View>
        //     <View style={styles.userRow}>
        //         <View style={styles.userImage}>
        //             <Avatar
        //                 type = 'text'
        //                 text='Soumya Ranjan Swain'
        //                 size="x-small"
        //                 borderColor = "#f2f2f2"
        //                 textBackgroundFill = '#fff'
        //                 shadow
        //             />
        //         </View>
        //         <View>
        //             <Text style={{ fontSize: 16 }}>Soumya Ranjan Swain</Text>
        //             <Text
        //                 style={{
        //                     color: 'gray',
        //                     fontSize: 16,
        //                 }}
        //             >
        //                 srswain2@gmail.com
        //             </Text>
        //         </View>
        //     </View>
        //     {/*<Demo weekView={false}/>*/}
        //     <TimelineDemo/>
        // </ScrollView>
        <View style={styles.container}>
            <StatusBar backgroundColor="#223F46" barStyle='default' />
            <View style={styles.headerBar}></View>
            <View style={styles.userRow}>
                <View style={styles.userImage}>
                    <Avatar
                        type = 'text'
                        text='Soumya Ranjan Swain'
                        size="x-small"
                        borderColor = "#f2f2f2"
                        textBackgroundFill = '#fff'
                        shadow
                    />
                </View>
                <View>
                    <Text style={{ fontSize: 16 }}>Soumya Ranjan Swain</Text>
                    <Text
                        style={{
                            color: 'gray',
                            fontSize: 16,
                        }}
                    >
                        srswain2@gmail.com
                    </Text>
                </View>
                <View style={styles.viewChange}>
                    <TouchableOpacity onPress={()=> {console.log("hi1")}} >
                        <Icon name="calendar" size={27} color="#223F46" style={styles.viewChangeIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> {console.log("hi2")}} >
                        <Icon name="list" size={29} color="#999" />
                    </TouchableOpacity>
                </View>
            </View>
            {/*<Demo weekView={false}/>*/}
            <TimelineDemo/>
        </View>
    );


}


const styles = StyleSheet.create({
    headerBar: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#26474E', // changing navbar color
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 7,
        // android (Android +5.0)
        elevation: 20,
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    userRow: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.1,
        flexDirection: 'row',
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
    },
    viewChange: {
        marginLeft: 'auto',
        flexDirection: 'row'
    },
    viewChangeIcon: {
        marginLeft: 20,
        marginRight: 20
    },
    userImage: {
        marginRight: 12,
    },
});
