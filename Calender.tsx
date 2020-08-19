import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import {Agenda, CalendarList} from 'react-native-calendars';

export default class Calender extends Component<{}, { items: any }> {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
    }

    render() {
        return (


            <Agenda
                // Enable horizontal scrolling, default = false
                horizontal={true}
                    // Enable paging on horizontal, default = false
                pagingEnabled={true}
                    // Set custom calendarWidth.
                calendarWidth={320}
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                selected={new Date()}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#fff',
                    calendarHeight: 100,
                    calendarWidth: 100,
                    textSectionTitleColor: '#b6c1cd',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'orange',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: 'blue',
                    indicatorColor: 'blue',
                    textDayFontFamily: 'monospace',
                    textMonthFontFamily: 'monospace',
                    textDayHeaderFontFamily: 'monospace',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16,
                    agendaDayTextColor: 'yellow',
                    agendaDayNumColor: 'green',
                    agendaTodayColor: 'red',
                    'stylesheet.calendar.header': {
                        week: {
                            marginTop: 50,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }
                    }
                }}
            />


        );
    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    this.state.items[strTime] = [];
                    const numItems = 3;
                    for (let j = 0; j < numItems; j++) {
                        this.state.items[strTime].push({
                            name: 'Item for ' + strTime,
                            height: 50
                        });
                    }
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        return (
            <View style={{height: 80}}>
                <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
            </View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'red',
        flex: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        marginTop: 5,

    },
    emptyDate: {
        backgroundColor: 'green',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 5,
        height:20,
    }
});