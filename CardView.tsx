import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet, ScrollView
} from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import Swiper from 'react-native-swiper';

export default class CardView extends Component<{}, { selectedOption: string, tabIndex: number }> {
    Past = () => (
        <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
    );

    OnGoing = () => (
        <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
    );

    ComingUp = () => (
        <View style={[styles.scene, { backgroundColor: '#ff3bb7' }]} />
    );

    options = [
        "Past",
        "On Going",
        "Up Coming"
    ];

    constructor(props) {
        super(props);
        this.state = {selectedOption: 'On Going', tabIndex: 1};
    }

    setSelectedOption(selectedOption){
        let idx1 = this.options.findIndex((element) => selectedOption === element);
        let idx2 = this.options.findIndex((element) => this.state.selectedOption === element)
        this.refs.swiper.scrollBy(idx1 - idx2, true);
        this.setState({
            selectedOption,
            tabIndex: this.options.findIndex((element) => selectedOption === element)
        });
    }

    scrollBy() {

    }

    render() {
        return (
            <View style={styles.container}>
                <SegmentedControls
                    tint={'#26474E'}
                    selectedTint= {'white'}
                    backTint= {'#75a0a5'}
                    containerBorderTint= {'#75a0a5'}
                    options={ this.options }
                    allowFontScaling={ false } // default: true
                    onSelection={ this.setSelectedOption.bind(this) }
                    selectedOption={ this.state.selectedOption }
                    optionStyle={{fontFamily: 'monospace'}}
                    optionContainerStyle={{flex: 1}}
                />
                <Swiper
                    style={styles.wrapper}
                    showsButtons={false}
                    showsPagination={false}
                    index={1}
                    onIndexChanged = {(index) => {this.setState({selectedOption: this.options[index]})}}
                    ref='swiper'>
                    <ScrollView style={styles.slide1}>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                            <Text style={styles.text}>Beautiful</Text>
                    </ScrollView>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
                {/*<CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>*/}
                {/*    <TouchableOpacity*/}
                {/*        activeOpacity={1}*/}
                {/*        style={[styles.card, styles.card1]}*/}
                {/*        onPress={() => this.card.flip()}>*/}
                {/*        <Text style={styles.label}>AB</Text>*/}
                {/*    </TouchableOpacity>*/}
                {/*    <TouchableOpacity*/}
                {/*        activeOpacity={1}*/}
                {/*        style={[styles.card, styles.card2]}*/}
                {/*        onPress={() => this.card.flip()}>*/}
                {/*        <Text style={styles.label}>CD</Text>*/}
                {/*    </TouchableOpacity>*/}
                {/*</CardFlip>*/}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f5f6'
    },
    cardContainer: {
        flexDirection: 'row',
        height: 170,
        margin: 12,
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
        elevation: 10
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
    scene: {

    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});