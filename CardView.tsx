import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    ScrollView,
    Animated, TouchableOpacity
} from 'react-native';
import {SegmentedControls} from 'react-native-radio-buttons';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const DEFAULT_TAB_INDEX = 1;
const DEFAULT_TAB_TITLE = "On Going";

export default class CardView extends Component<{}, {
    selectedOption: string,
    tabIndex: number,
    tabControlStartValue: any,
    tabControlEndValue: any,
    tabControlDuration: any
}> {
    Past = () => (
        <View style={[styles.scene, {backgroundColor: '#ff4081'}]}/>
    );

    OnGoing = () => (
        <View style={[styles.scene, {backgroundColor: '#673ab7'}]}/>
    );

    ComingUp = () => (
        <View style={[styles.scene, {backgroundColor: '#ff3bb7'}]}/>
    );

    data = [
        {
            platform: "codechef",
            platformName: "Codechef",
            title: "September Challenge 2020",
            dateFrom: "04 Sep 2020 15:00:00",
            dateTo: "14 Sep 2020 15:00:00",
            logo: "./assets/platforms/small/logo-small-1.png",
            link: "https://www.codechef.com/SEPT20",
            backgroundColor: "#C1E4E5"
        },
        {
            platform: "codechef",
            platformName: "Codechef",
            title: "September Cook-Off 2020",
            dateFrom: "20 Sep 2020 21:30:00",
            dateTo: "21 Sep 2020 00:00:00",
            logo: "./assets/platforms/small/logo-small-1.png",
            link: "https://www.codechef.com/COOK122",
            backgroundColor: "#D3EABA"
        },
        {
            platform: "codechef",
            platformName: "Codechef",
            title: "September Cook-Off 2020",
            dateFrom: "20 Sep 2020 21:30:00",
            dateTo: "21 Sep 2020 00:00:00",
            logo: "./assets/platforms/small/logo-small-1.png",
            link: "https://www.codechef.com/COOK122",
            backgroundColor: "#FBF0D6"
        },
        {
            platform: "codechef",
            platformName: "Codechef",
            title: "September Cook-Off 2020",
            dateFrom: "20 Sep 2020 21:30:00",
            dateTo: "21 Sep 2020 00:00:00",
            logo: "./assets/platforms/small/logo-small-1.png",
            link: "https://www.codechef.com/COOK122",
            backgroundColor: "#FDE2C6"
        },
        {
            platform: "codechef",
            platformName: "Codechef",
            title: "September Cook-Off 2020",
            dateFrom: "20 Sep 2020 21:30:00",
            dateTo: "21 Sep 2020 00:00:00",
            logo: "./assets/platforms/small/logo-small-1.png",
            link: "https://www.codechef.com/COOK122",
            backgroundColor: "#D3EEEF"
        }];

    options = [
        "Past",
        "On Going",
        "Up Coming"
    ];

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: DEFAULT_TAB_TITLE,
            tabIndex: DEFAULT_TAB_INDEX,
            tabControlStartValue: Array(3).fill(new Animated.Value(0)),
            tabControlEndValue: Array(3).fill(1),
            tabControlDuration: 500,
        };
    }

    componentDidMount() {
        // Animated.timing(this.state.tabControlStartValue[DEFAULT_TAB_INDEX], {
        //     toValue: this.state.tabControlEndValue[DEFAULT_TAB_INDEX],
        //     duration: this.state.tabControlDuration,
        //     useNativeDriver: true,
        // }).start();
        let updatedTabControlStartValue = this.state.tabControlStartValue;
        updatedTabControlStartValue[this.state.tabIndex] = new Animated.Value(1);

        this.setState({
            tabControlStartValue: updatedTabControlStartValue
        });
    }

    setSelectedOption(selectedOption) {
        let currentTabIndex = this.options.findIndex((element) => selectedOption === element);
        if (currentTabIndex === this.state.tabIndex) {
            return;
        }
        Animated.timing(this.state.tabControlStartValue[currentTabIndex], {
            toValue: this.state.tabControlEndValue[currentTabIndex],
            duration: this.state.tabControlDuration,
            useNativeDriver: true,
        }).start();

        let updatedTabControlStartValue = this.state.tabControlStartValue// Array(3).fill(new Animated.Value(1))
        // updatedTabControlStartValue[currentTabIndex] = new Animated.Value(1);
        updatedTabControlStartValue[this.state.tabIndex] = new Animated.Value(0);

        this.setState({
            selectedOption,
            tabIndex: currentTabIndex,
            tabControlStartValue: updatedTabControlStartValue
        });
    }

    loadCard(cardObject) {
        return (
            <Card containerStyle={{backgroundColor: cardObject.backgroundColor, borderColor: cardObject.backgroundColor, margin: 10, marginBottom: 8, paddingLeft: 0, paddingRight: 0, borderRadius: 5, elevation: 10, shadowColor: '#000',
                shadowOffset: {width: 0, height: 5},
                shadowOpacity: 0.3,
                shadowRadius: 7}}>
                <View style={{flexDirection:'row', marginLeft: 0}}>
                    <View style={{padding: 0, margin: 0, borderRadius: 9, alignItems: "center", alignContent: "center"}}>
                        <Image
                            style={{ width: 120, height: 120, margin: 0, marginLeft: 15, borderRadius: 15, alignItems: "center", alignContent: "center"}}
                            source={require('./assets/platforms/small/ls1.png')}
                        />
                    </View>
                    <View style={{flex: 1, padding: 0, margin: 0}}>
                        <Text style={{fontSize: 24, fontWeight: "bold", textAlign: 'center'}}>{cardObject.title}</Text>
                        <View style={{ flexDirection:'row'}}>
                            <View style={{flex: 1}}>
                                <Text style={{color: "#555", fontSize: 18, fontFamily: "sans-serif-light", flex: 1, textAlign: 'center', textAlignVertical: "center"}}>START:</Text>
                                <View style={{flex: 1}}>
                                    <Text style={{color: "#000", fontSize: 15, fontFamily: "sans-serif-light", fontWeight: "bold", flex: 1, alignSelf: "stretch", textAlign: 'center'}}>4th Sep, 2020</Text>
                                    <Text style={{color: "#000", fontSize: 15, fontFamily: "sans-serif-light", fontWeight: "bold", flex: 1, alignSelf: "stretch", textAlign: 'center'}}>15:00</Text>
                                </View>
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{color: "#555", fontSize: 18, fontFamily: "sans-serif-light", flex: 1,textAlign: 'center', textAlignVertical: "center"}}>END:</Text>
                                <View>
                                    <Text style={{color: "#000", fontSize: 15, fontFamily: "sans-serif-light", fontWeight: "bold", flex: 1, alignSelf: "stretch", textAlign: 'center'}}>14th Sep, 2020</Text>
                                    <Text style={{color: "#000", fontSize: 15, fontFamily: "sans-serif-light", fontWeight: "bold", flex: 1, alignSelf: "stretch", textAlign: 'center'}}>21:30</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection:'row', marginTop: 10}}>
                            <View style={{flex: 1, marginLeft: 20, marginRight: 10}}>
                                <Button
                                    buttonStyle={{backgroundColor: cardObject.backgroundColor}}
                                    titleStyle={{color: "#26474E", fontFamily: "sans-serif-light"}}
                                    icon={
                                        <Icon
                                            name="external-link"
                                            size={15}
                                            color="#26474E"
                                            style={{marginRight: 8}}
                                        />
                                    }
                                    title="Link"
                                    raised={true}
                                />
                            </View>
                            <View style={{flex: 1, marginLeft: 10, marginRight: 20}}>
                                <Button
                                    buttonStyle={{backgroundColor: cardObject.backgroundColor}}
                                    titleStyle={{color: "#26474E", fontFamily: "sans-serif-light"}}
                                    icon={
                                        <Icon
                                            name="bell"
                                            size={15}
                                            color="#26474E"
                                            style={{marginRight: 10}}
                                        />
                                    }
                                    title="Reminder"
                                    raised={true}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Card>);
    }

    render() {
        return (
            <View style={styles.container}>
                <SegmentedControls
                    tint={'#26474E'}
                    selectedTint={'white'}
                    backTint={'#75a0a5'}
                    containerBorderTint={'#75a0a5'}
                    options={this.options}
                    allowFontScaling={false} // default: true
                    onSelection={this.setSelectedOption.bind(this)}
                    selectedOption={this.state.selectedOption}
                    optionStyle={{fontFamily: 'monospace'}}
                    optionContainerStyle={{flex: 1}}
                />
                {this.state.tabIndex === 0 ?
                    <Animated.View style={[styles.animatedViewSlide, {opacity: this.state.tabControlStartValue[0]}]}>
                        <ScrollView style={styles.slide1} contentContainerStyle={{
                            flexGrow: 1
                        }}>
                            {this.data.map((contest) => {
                                return this.loadCard(contest);
                            })}

                        </ScrollView>
                    </Animated.View>
                    : null
                }
                {this.state.tabIndex === 1 ?
                    <Animated.View style={[styles.animatedViewSlide, {opacity: this.state.tabControlStartValue[1]}]}>
                        <ScrollView style={styles.slide2} contentContainerStyle={{
                            flexGrow: 1,
                            backgroundColor: "#FFF"
                        }}>
                            {this.data.map((contest) => {
                                return this.loadCard(contest);
                            })}

                        </ScrollView>
                    </Animated.View>
                    : null
                }
                {this.state.tabIndex === 2 ?
                    <Animated.View style={[styles.animatedViewSlide, {opacity: this.state.tabControlStartValue[2]}]}>
                        <ScrollView style={styles.slide3} contentContainerStyle={{
                            flexGrow: 1,
                            backgroundColor: "#FFF"
                        }}>
                            {this.data.map((contest) => {
                                return this.loadCard(contest);
                            })}

                        </ScrollView>
                    </Animated.View>
                    : null
                }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    cardContainer: {
        flexDirection: 'row',
        height: 170,
        margin: 12,
        elevation: 2
    },
    card: {
        flexDirection: 'row',
        height: 170,
        backgroundColor: '#9ebcc0',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowRadius: 7,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        elevation: 2
    },
    card1: {
        backgroundColor: '#9ebcc0',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    label: {
        fontSize: 20
    },
    scene: {},
    wrapper: {},
    slide1: {
        flex: 1,
        backgroundColor: '#fff'
    },
    slide2: {
        flex: 1,
        backgroundColor: '#fff'
    },
    slide3: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
    },
    animatedViewSlide: {
        flex: 1,
    }
});