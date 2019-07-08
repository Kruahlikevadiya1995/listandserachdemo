import dimen from '../../Utils/dimen';
import color from '../../Utils/color';

export default appstyles = {

    main_root_style: {
        flex: 1,
        backgroundColor: color.screen_back,
    },
    inner_root_style: {
        flex: 1,
        marginLeft:dimen.dimen_35,
        marginRight:dimen.dimen_35,
        marginTop:dimen.dimen_25,
        marginBottom:dimen.dimen_25,
    },
    profile_image_style: {
        height: dimen.dimen_150,
        width: dimen.dimen_150,
        borderRadius: dimen.dimen_75,
        alignSelf:'center',
        marginBottom:dimen.dimen_20,
        marginTop:dimen.dimen_20
       
    },
    text_layout_style: {
        marginTop: dimen.dimen_20,
        width:'100%',
    },
    title_style: {
        fontFamily: 'regular',
        fontSize: dimen.dimen_12,
        color: color.black,
        fontWeight: '500',
    },
    text_style: {
        fontFamily: 'regular',
        fontSize: dimen.dimen_14,
        color: color.black,
     
        marginTop:dimen.dimen_10
    }
}

