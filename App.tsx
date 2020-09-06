import React from 'react';
import {Platform, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Calender from "./Calender";
import Demo from "./Demo";
import TimelineDemo from "./Timeline";
import { Avatar } from 'react-native-image-avatars';
import { NavigationBar } from 'navigationbar-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardView from "./CardView";
import Dialog, { DialogTitle, DialogContent, DialogFooter, DialogButton, ScaleAnimation } from 'react-native-popup-dialog';

export default function App() {
    const [displayView, setDisplayView] = React.useState("calender");
    const [displayEventDetailsDialog, setDisplayEventDetailsDialog] = React.useState(false);
    const [displayEventDetailsDialogContent, setDisplayEventDetailsDialogContent] = React.useState({title: '', originalStart: '', originalEnd: '', color: '', summary: ''});

    const getDisplayViewButtonStyles = (currentView, view) => {
        const displayViewBackgroundColor = currentView === view ? "#75a0a5" : "#9ebcc0";
        return StyleSheet.create({
            borderShadow: {
                borderRadius: 40,
                width: 40,
                height: 40,
                backgroundColor: displayViewBackgroundColor, // #698396, #82B2B8
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 7,
                marginRight: 7,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 5},
                shadowOpacity: 0.3,
                shadowRadius: 7,
                elevation: 10
            }
        });
    }

    const eventDetailsDialog = (event) => {
        setDisplayEventDetailsDialogContent(event);
        setDisplayEventDetailsDialog(true);
    }

    return (
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
                    <Text style={{ fontSize: 16, fontFamily: 'sans-serif'}}>Soumya Ranjan Swain</Text>
                    <Text
                        style={{
                            color: 'gray',
                            fontSize: 16,
                            fontFamily: 'sans-serif'
                        }}
                    >
                        srswain2@gmail.com
                    </Text>
                </View>
                <View style={styles.viewChange}>
                    <TouchableOpacity onPress={()=> {setDisplayView('calender')}} style={getDisplayViewButtonStyles(displayView, 'calender').borderShadow}>
                        <Icon name="calendar-weekend" size={20} color="#26474E"  />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> {setDisplayView('list')}} style={getDisplayViewButtonStyles(displayView, 'list').borderShadow}>
                        <Icon name="receipt" size={20} color="#26474E" />
                    </TouchableOpacity>
                </View>
            </View>
            <Dialog
                visible={displayEventDetailsDialog}
                dialogTitle={<DialogTitle title={displayEventDetailsDialogContent.title} />}
                onTouchOutside={() => {
                    setDisplayEventDetailsDialog(false);
                }}
                dialogAnimation={new ScaleAnimation({
                    initialValue: 0, // optional
                    useNativeDriver: true, // optional
                })}
                footer={
                    <DialogFooter>
                        <DialogButton
                            text="OK"
                            onPress={() => setDisplayEventDetailsDialog(false)}
                        />
                    </DialogFooter>
                }
            >
                <DialogContent style={{height: 200}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: "center", alignContent: "center"}}>
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 15, alignSelf: "stretch"}}
                            source={require('./assets/platforms/small/ls1.png')}
                        />
                    </View>
                </DialogContent>
            </Dialog>
            {/*<Demo weekView={false}/>*/}
            {displayView === 'calender' ? <TimelineDemo eventDetailsDialog={eventDetailsDialog}/> : <CardView/>}
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
        backgroundColor: '#f1f5f6'
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
    borderShadow: {
        borderRadius: 40,
        width: 40,
        height: 40,
        backgroundColor:'#75a0a5', // #698396, #82B2B8
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 7,
        marginRight: 7,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 7,
        elevation: 10
    }
});
