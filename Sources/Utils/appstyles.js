import dimen from './dimen';
import color from './color';

export default appstyles = {

    toolbar_style: {
        backgroundColor: color.primary,
    },
    toolbar_title_text_style: {
        fontFamily: 'regular',
        fontSize: dimen.dimen_17,
        color: color.white,
        textTransform: 'uppercase',
        fontWeight:'600'
    },
    toolbar_title_view_style: {
        flex: 1,
        alignItems: 'center'
    },
    list_divider_style:{
        height: 0.3, 
        backgroundColor: color.grey_text, 
    },
    list_divider_style_top:{
        height: 0.3, 
        backgroundColor: color.grey_text, 
        marginTop:dimen.dimen_3
    }

}