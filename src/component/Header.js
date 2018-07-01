import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) => {
    const {textStyle,viewStyle} = styles;
    return (
        <View style={viewStyle}>
        <Text style={textStyle}> {props.headerText} </Text>
        </View>
    );

}

const styles = {
    textStyle:
    {
        fontSize: 20
    },
    viewStyle:
    {
        backgroundColor: 'lightgray',
        height:50, 
        
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0 , height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
    }
}
export default Header;