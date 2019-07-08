import React, { Component } from 'react';
import {  Text, View, Image,  StatusBar, SafeAreaView } from 'react-native';
import color from '../../Utils/color'
import appstyles from '../../Utils/appstyles'
import styles from './style'

export class Detail extends Component {
    static navigationOptions = {
        headerTintColor:color.white,
        
        headerStyle: (
            appstyles.toolbar_style
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(this.props.data)
        }

    }
    render() {
        return (
            <View style={styles.main_root_style}>
                <StatusBar backgroundColor={color.primary} barStyle="light-content" />
                <SafeAreaView style={styles.main_root_style}>
                    <View style={styles.inner_root_style} >

                        <Image source={{ uri: this.state.data.profileImage }} style={styles.profile_image_style} resizeMode='contain'></Image>

                        <View style={styles.text_layout_style}>
                            <Text style={styles.title_style}>Name</Text>
                            <Text style={styles.text_style}>{this.state.data.firstName + " " + this.state.data.lastName}</Text>
                            <View style={appstyles.list_divider_style_top} />
                        </View>

                        <View style={styles.text_layout_style}>
                            <Text style={styles.title_style}>Address</Text>
                            <Text style={styles.text_style}>{styles.address_text_style} {this.state.data.address.streetAddress + "," + this.state.data.address.city + "," + this.state.data.address.state + "," + this.state.data.address.postalCode + "."}</Text>
                            <View style={appstyles.list_divider_style_top} />
                        </View>

                        <View style={styles.text_layout_style}>
                            <Text style={styles.title_style}>Phone Number</Text>
                            <Text style={styles.text_style}>{this.state.data.phoneNumber[0].number}</Text>
                            <View style={appstyles.list_divider_style_top} />
                        </View>
                        <View style={styles.text_layout_style}>
                            <Text style={styles.title_style}>Fax Number</Text>
                            <Text style={styles.text_style}>{this.state.data.phoneNumber[1].number}</Text>
                            <View style={appstyles.list_divider_style_top} />
                        </View>
                    </View>


                </SafeAreaView>
            </View>
        )
    }
}

export default Detail;