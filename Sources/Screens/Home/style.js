import dimen from '../../Utils/dimen';
import color from '../../Utils/color';

export default appstyles = {

    main_root_style: {
        flex: 1,
        backgroundColor: color.screen_back,
    },
    list_root_layout_style: {
        flexDirection: 'row',
        padding: dimen.dimen_15,
        alignItems: 'center'
    },
    profile_image_style: {
        height: dimen.dimen_50,
        width: dimen.dimen_50,
        borderRadius: dimen.dimen_25,
    },
    list_middle_layout_style: {
        marginLeft: dimen.dimen_15,
        marginRight: dimen.dimen_15
    },
    name_text_style: {
        fontSize: dimen.dimen_14,
        fontFamily: 'regular',
        color: color.black,
        fontWeight: '500',
        lineHight: dimen.dimen_14
    },
    address_text_style: {
        fontSize: dimen.dimen_12,
        fontFamily: 'regular',
        color: color.black,
        lineHight: dimen.dimen_12
    },
    phone_no_text_style: {
        fontSize: dimen.dimen_12,
        fontFamily: 'regular',
        color: color.black,
        lineHight: dimen.dimen_12,
        
    },
    loader_layout_style: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

    ,
    top_layout_style: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    search_layout_style: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0.3,
        borderColor: color.grey_text,
        borderRadius: dimen.dimen_5,
        margin: dimen.dimen_10,
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: dimen.dimen_10,
        paddingRight:dimen.dimen_10
    },
    search_edittxt_style: {
        flex: 1,
        backgroundColor: color.transparent,
        color: color.grey_text,
        fontFamily: 'regular',
        fontSize: dimen.dimen_14,
        paddingRight: dimen.dimen_7,
        paddingLeft: dimen.dimen_7,
        height: dimen.dimen_35,
        marginTop: dimen.dimen_2
    },
    search_icon_style: {
        height: dimen.dimen_20,
        width: dimen.dimen_20,
    },
    nodata_layout_style: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    no_data_text_style: {
        fontSize: dimen.dimen_15,
        color: color.primary,
        fontFamily: 'bold',
        alignSelf: 'center'
    },

}

