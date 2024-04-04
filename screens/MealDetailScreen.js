import { useLayoutEffect } from 'react';
import {Text,View, Image, StyleSheet} from 'react-native';
import {MEALS} from '../data/dummy-data'
import IconButton from '../components/IconButton';

function MealDetailScreen({route,navigation}){
    const mealId = route.params.mealId;

    const selectMeal = MEALS.find((meal)=> meal.id === mealId);

    function headerButtonHandler(){
        console.log('clicked')
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>{
                return <IconButton icon='star'color="white" onPress={headerButtonHandler}/>
            }
        })
    },[navigation, headerButtonHandler]);
    
    return <View>
        <Image style={styles.image} source={{uri: selectMeal.imageUrl}}/>
        <Text style={styles.title}>{selectMeal.title}</Text>

        <Text style={styles.subtitle}>Ingredients</Text>
        <Text style={styles.text} > 
        {selectMeal.ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)}
        </Text>
        <Text style={styles.subtitle}>Steps</Text>
        <Text style={styles.text} >
        {selectMeal.steps.map((step) => <Text key={step}>{step}</Text>)}
        </Text>
    </View>
}

export default MealDetailScreen;

const styles = StyleSheet.create({
      image:{
        width:'100%',
        height: 350
      },
      title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white'
      },
      subtitle:{
        color:"white",
        fontSize:18,
        fontWeight:"bold",
        margin:4,
        padding:6,
        textAlign:"center"
      },
      text:{
        fontWeight:"800",
        textAlign:"center"
      }
})
