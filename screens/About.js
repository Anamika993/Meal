import {Text,View, TextInput, StyleSheet} from 'react-native';

function FavoritesScreen(){
return (
    <View>
        <Text style={styles.text}>
            About
        </Text>
    </View>
)
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    text:{
        fontWeight:'bold',
        fontSize:40,
        textAlign:'center',
        color:'white'
    }
})