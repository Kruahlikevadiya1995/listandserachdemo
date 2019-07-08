import React, { Component } from 'react';
import { Text, View, Image, ActivityIndicator, TouchableOpacity, StatusBar, SafeAreaView, TextInput } from 'react-native';
import color from '../../Utils/color'
import image from '../../Utils/images'
import appstyles from '../../Utils/appstyles'
import styles from './style'
import { FlatList } from 'react-native-gesture-handler';
import * as data from '../../DataBase/data.json';
import { Actions } from 'react-native-router-flux';

export class Home extends Component {
    static navigationOptions = {
        headerStyle: (
            appstyles.toolbar_style
        ),

        headerTitle: (
            <View style={appstyles.toolbar_title_view_style}>
                <Text style={appstyles.toolbar_title_text_style}>Home</Text>
            </View>
        ),
    };


    on_press_of_list_data(item){
        Actions.detail({data: JSON.stringify(item)});
    }
    search_list(text) {
        const newData = this.array_holder.filter(function (item) {

          const itemData = `${item.firstName.toUpperCase()}${item.lastName.toUpperCase()} ${item.address.streetAddress.toUpperCase()}
          ${item.address.city.toUpperCase()}${item.address.state.toUpperCase()}${item.address.postalCode.toUpperCase()}
          ${item.phoneNumber[0].number.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            datasource: newData,
            searched_text: text,
        });
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ is_loaded: false })
        }, 1000);

    }
    constructor(props) {
        super(props);
        this.state = {
            is_loaded: true,
            datasource: data.user_data,
            searched_text: ''
        }
        this.array_holder = data.user_data;
    }
    render() {
        if (this.state.is_loaded) {
            return (
                <View style={styles.loader_layout_style}>
                    <ActivityIndicator color={color.primary} size="large"></ActivityIndicator>
                </View>
            )
        } else {
            return (
                <View style={styles.main_root_style}>
                    <StatusBar backgroundColor={color.primary} barStyle="light-content" />
                    <SafeAreaView style={styles.main_root_style}>
                        <View style={styles.main_root_style} >

                            {this.array_holder.length != 0 || this.state.searched_text.length == 0 ? (
                                <View >
                                    <View style={styles.top_layout_style}>
                                        <View style={styles.search_layout_style}>
                                            <Image source={image.search} style={styles.search_icon_style} resizeMode='contain'></Image>
                                            <TextInput placeholder='Search Here' style={styles.search_edittxt_style} underlineColorAndroid='transparent'
                                                onChangeText={text => this.search_list(text)}
                                                value={this.state.searched_text}></TextInput>
                                        </View>
                                    </View>

                                    <View style={styles.list_divider_style}></View>
                                </View>
                            ) : null}

                            {this.state.datasource.length == 0 ? (
                                <View style={styles.nodata_layout_style}>
                                    <Text style={styles.no_data_text_style}>No Data Available</Text>
                                </View>
                            ) : null}

                            {this.state.datasource.length != 0 ? (
                                <FlatList
                                    data={this.state.datasource}
                                    ItemSeparatorComponent={this.list_item_seperator}
                                    renderItem={this.get_list_item_view}
                                ></FlatList>
                            ) : null}
                        </View>

                    </SafeAreaView>
                </View>
            )
        }
    }

    get_list_item_view = ({ item }) => {
        return (
            <TouchableOpacity onPress={()=>this.on_press_of_list_data(item)}>
                <View style={styles.list_root_layout_style}>
                    <Image source={{ uri: item.profileImage }} resizeMode='contain' style={styles.profile_image_style}></Image>

                    <View style={styles.list_middle_layout_style}>
                        <Text style={styles.name_text_style}>{item.firstName + " " + item.lastName}</Text>
                        <Text style={styles.address_text_style}>{item.address.streetAddress + "," + item.address.city + "," + item.address.state + "," + item.address.postalCode + "."}</Text>
                        <Text style={styles.phone_no_text_style}>{item.phoneNumber[0].number }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    list_item_seperator = () => {
        return (
            <View style={appstyles.list_divider_style} />
        );
    }
};



export default Home;