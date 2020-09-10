import _ from 'lodash';
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button
} from 'react-native';
import {
    ExpandableCalendar,
    Timeline,
    CalendarProvider
} from 'react-native-calendars';
import moment from 'moment';
import data from './assets/data/testData.json';

const EVENTS = [
    {
        start: new Date().toString(),
        end: '2017-09-06 23:30:00',
        title: 'Dr. Mariana Joseph',
        summary: '3412 Piedmont Rd NE, GA 3032',
        color: '#e6add8'
    },
    {
        start: '2017-09-06 22:30:00',
        end: '2017-09-06 23:30:00',
        title: 'Dr. Mariana Joseph',
        summary: '3412 Piedmont Rd NE, GA 3032',
        color: '#e6add8'
    },
    {
        start: '2017-09-06 22:30:00',
        end: '2017-09-06 23:30:00',
        title: 'Dr. Mariana Joseph',
        summary: '3412 Piedmont Rd NE, GA 3032',
        color: '#e6add8'
    },
    {
        start: '2017-09-06 22:30:00',
        end: '2017-09-06 23:30:00',
        title: 'Dr. Mariana Joseph',
        summary: '3412 Piedmont Rd NE, GA 3032',
        color: '#e6add8'
    },
    {
        start: '2017-09-06 22:30:00',
        end: '2017-09-06 23:30:00',
        title: 'Dr. Mariana Joseph',
        summary: '3412 Piedmont Rd NE, GA 3032',
        color: '#e6add8'
    },
    {
        start: '2017-09-06 22:30:00',
        end: '2017-09-06 23:30:00',
        title: 'Dr. Mariana Joseph',
        summary: '3412 Piedmont Rd NE, GA 3032',
        color: '#e6add8'
    },
    {
        start: '2017-09-07 00:30:00',
        end: '2017-09-07 01:30:00',
        title: 'Visit Grand Mother',
        summary: 'Visit Grand Mother and bring some fruits.',
        color: '#ade6d8'
    },
    {
        start: '2017-09-07 02:30:00',
        end: '2017-09-07 03:20:00',
        title: 'Meeting with Prof. Behjet Zuhaira',
        summary: 'Meeting with Prof. Behjet at 130 in her office.',
        color: '#e6add8'
    },
    {
        start: '2017-09-07 04:10:00',
        end: '2017-09-07 04:40:00',
        title: 'Tea Time with Dr. Hasan',
        summary: 'Tea Time with Dr. Hasan, Talk about Project'
    },
    {
        start: '2017-09-07 01:05:00',
        end: '2017-09-07 01:35:00',
        title: 'Dr. Mariana Joseph',
        summary: '3412 Piedmont Rd NE, GA 3032'
    },
    {
        start: '2017-09-07 14:30:00',
        end: '2017-09-07 16:30:00',
        title: 'Meeting Some Friends in ARMED',
        summary: 'Arsalan, Hasnaat, Talha, Waleed, Bilal',
        color: '#d8ade6'
    },
    {
        start: '2017-09-08 01:40:00',
        end: '2017-09-08 02:25:00',
        title: 'Meet Sir Khurram Iqbal',
        summary: 'Computer Science Dept. Comsats Islamabad',
        color: '#e6bcad'
    },
    {
        start: '2017-09-08 04:10:00',
        end: '2017-09-08 04:40:00',
        title: 'Tea Time with Colleagues',
        summary: 'WeRplay'
    },
    {
        start: '2017-09-08 00:45:00',
        end: '2017-09-08 01:45:00',
        title: 'Lets Play Apex Legends',
        summary: 'with Boys at Work'
    },
    {
        start: '2017-09-08 11:30:00',
        end: '2017-09-08 12:30:00',
        title: 'Dr. Mariana Joseph',
        summary: '3412 Piedmont Rd NE, GA 3032'
    },
    {
        start: '2017-09-10 12:10:00',
        end: '2017-09-10 13:45:00',
        title: 'Merge Request to React Native Calendards',
        summary: 'Merge Timeline Calendar to React Native Calendars'
    }
];

export default class TimelineDemo extends Component<{eventDetailsDialog: any},{}> {
    state = {
        currentDate: new Date(),
        eventDetailsDialog: false
    }

    constructor(props) {
        super(props);
    }

    onDateChanged = (date) => {
        // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
        // fetch and set data for date + week ahead
        this.setState({currentDate: date});
    };

    onMonthChange = (/* month, updateSource */) => {
        // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
    };

    renderEmptyItem() {
        return (
            <View style={styles.emptyItem}>
                <Text style={styles.emptyItemText}>No Events Planned</Text>
            </View>
        );
    }

    renderItem = ({item}) => {
        if (_.isEmpty(item)) {
            return this.renderEmptyItem();
        }
        console.log("aa" + item)
        return (
            <TouchableOpacity
                style={styles.item}>
                <View>
                    <Text style={styles.itemHourText}>{item.hour}</Text>
                    <Text style={styles.itemDurationText}>{item.duration}</Text>
                </View>
                <Text style={styles.itemTitleText}>{item.title}</Text>
                <View style={styles.itemButtonContainer}>
                    <Button title={'Info'} onPress={() => {}}/>
                </View>
            </TouchableOpacity>
        );
    };

    getTheme = () => {
        const themeColor = '#26474E';
        const lightThemeColor = '#AAD9CD';
        const disabledColor = '#a6acb1';
        const black = '#20303c';
        const white = '#f1f5f6';

        return {
            // arrows
            arrowColor: black,
            arrowStyle: {padding: 0},
            // month
            monthTextColor: black,
            textMonthFontSize: 16,
            textMonthFontFamily: 'sans-serif',
            textMonthFontWeight: 'bold',
            // day names
            textSectionTitleColor: black,
            textDayHeaderFontSize: 12,
            textDayHeaderFontFamily: 'sans-serif',
            textDayHeaderFontWeight: 'normal',
            // today
            todayBackgroundColor: lightThemeColor,
            todayTextColor: themeColor,
            // dates
            dayTextColor: themeColor,
            textDayFontSize: 12,
            textDayFontFamily: 'sans-serif',
            textDayFontWeight: '500',
            textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
            // selected date
            selectedDayBackgroundColor: themeColor,
            selectedDayTextColor: white,
            // disabled date
            textDisabledColor: disabledColor,
            // dot (marked date)
            dotColor: themeColor,
            selectedDotColor: white,
            disabledDotColor: disabledColor,
            dotStyle: {marginTop: -2}
        };
    };

    modifyData = () => {
        const modData = [] as any;
        data.map((event) => {
            modData.push({
                start: new Date(event.originalDateFrom).toString(),
                end: new Date(event.originalDateTo).toString(),
                originalStart: new Date(event.originalDateFrom).toString(),
                originalEnd: new Date(event.originalDateTo).toString(),
                dateFrom: event.dateFrom,
                dateTo: event.dateTo,
                timeFrom: event.timeFrom,
                timeTo: event.timeTo,
                title: event.title,
                summary: event.link,
                color: event.backgroundColor
            })
        });

        return modData;
    };

    render() {
        const timelineEvents = this.modifyData();
        return (
            <CalendarProvider
                // date={ITEMS[0].title}
                date={this.state.currentDate}
                onDateChanged={this.onDateChanged}
                onMonthChange={this.onMonthChange}
                theme={{todayButtonTextColor: '#26474E'}}
                showTodayButton
                disabledOpacity={0.6}
                // todayBottomMargin={16}
            >
                <ExpandableCalendar
                    // horizontal={false}
                    // hideArrows
                    // disablePan
                    // hideKnob
                    // initialPosition={ExpandableCalendar.positions.OPEN}
                    firstDay={1}
                    // markedDates={this.getMarkedDates()} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
                    // markedDates={() => {}} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
                    theme={this.getTheme()}
                    calendarStyle={styles.calendar}
                    headerStyle={styles.calendar} // for horizontal only
                    allowShadow={true}
                    // disableWeekScroll
                />
                <Timeline
                    format24h={true}
                    eventTapped={e => {
                        this.setState({eventDetailsDialog: true});
                        console.log(this.state.eventDetailsDialog);
                        this.props.eventDetailsDialog(e);
                    }}
                    events={timelineEvents.filter(event => {
                        // moment(this.state.currentDate).isBetween(event.start, event.end, 'day')
                        if (moment(this.state.currentDate).isSameOrAfter(event.start, 'day') && moment(this.state.currentDate).isSameOrBefore(event.end, 'day'))
                        {
                            if (moment(this.state.currentDate).isSame(event.start, 'day')) {
                                if (!moment(this.state.currentDate).isSame(event.end, 'day')) {
                                    event.start = moment(event.start).format("YYYY-MM-DD HH:mm:00");
                                    event.end = new Date(this.state.currentDate).toISOString().substring(0, 10) + " 23:59:59";
                                }
                            }

                            if (moment(this.state.currentDate).isSame(event.end, 'day')) {
                                if (!moment(this.state.currentDate).isSame(event.start, 'day')) {
                                    event.start = new Date(this.state.currentDate).toISOString().substring(0, 10) + " 00:00:00";
                                    event.end = moment(event.end).format("YYYY-MM-DD HH:mm:00")
                                }
                            }

                            if (moment(this.state.currentDate).isBetween(event.start, event.end, 'day')) {
                                event.start = new Date(this.state.currentDate).toISOString().substring(0, 10) + " 00:00:00";
                                event.end = new Date(this.state.currentDate).toISOString().substring(0, 10) + " 23:59:59";
                            }
                            return true;
                        }
                        return false;
                    })}

                    // moment(event.start).isSame(this.state.currentDate, 'day'))}
                    // scrollToFirst={true}
                    // start={0}
                    // end={24}
                />
            </CalendarProvider>
        );
    }
}

const styles = StyleSheet.create({
    calendar: {
        paddingLeft: 20,
        paddingRight: 20
    },
    section: {
        backgroundColor: '#f0f4f7',
        color: '#79838a'
    },
    item: {
        padding: 20,
        backgroundColor: '#f1f5f6',
        borderBottomWidth: 1,
        borderBottomColor: '#e8ecf0',
        flexDirection: 'row'
    },
    itemHourText: {
        color: 'black'
    },
    itemDurationText: {
        color: 'grey',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4
    },
    itemTitleText: {
        color: 'black',
        marginLeft: 16,
        fontWeight: 'bold',
        fontSize: 16
    },
    itemButtonContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    emptyItem: {
        paddingLeft: 20,
        height: 52,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e8ecf0'
    },
    emptyItemText: {
        color: '#79838a',
        fontSize: 14
    },
});
