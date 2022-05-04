import { StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView,TouchableOpacity,TextInput} from 'react-native';
import {useState} from 'react';
import { Feather, Ionicons,Entypo } from '@expo/vector-icons';
import Details from './Details';

export default function App() {
  const[ThisFunction, setThisFunction]=useState(0);
  
  var english = require('./assets/brkfst.jpg');
  var easy = require('./assets/brkfst2.jpg');
  var wings = require('./assets/brkfst3.jpg');
  var Pancake = require('./assets/Pancake.jpg');
  var Veggie = require('./assets/Veggie.jpg');
  var continental = require('./assets/continental.jpg');

  return (

    <View style={styles.container}>
      
      <ImageBackground style= {{flex: 1, width: '100%', padding: 10, marginTop: 45,marginLeft:15}}
          source= {require('./assets/background.jpg')}>

            <View style= {styles.header}>

            <View style= {{flexDirection: 'row', justifyContent: 'space-between', width: '13%'}}>
             <Image style= {{height:22, width: 22}}
              source= {require('./assets/logo.png')}></Image>
              <Text style= {{fontWeight: '600', color: '#BDBDBD', fontSize: 10, marginLeft: 8}}>Wings</Text>
            </View>
            
            <View style= {{flexDirection: 'row', justifyContent: 'space-between', width: '58%'}}>
             
            <TouchableOpacity>
            <Text style= {{fontWeight: '600', color: '#BDBDBD', fontSize: 10}}>About us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style= {{fontWeight: '600', color: '#BDBDBD', fontSize: 10}}>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style= {{fontWeight: '600', color: '#BDBDBD', fontSize: 10}}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style= {{flexDirection: 'row', justifyContent: 'space-between',width:45, height: 16,
            justifyContent: 'center', borderWidth: 1, borderColor: '#BDBDBD', borderRadius: 15}}>
             <Text style= {{fontWeight: '600', color: '#BDBDBD', fontSize: 10}}>Menu</Text>
             </View>
             </TouchableOpacity>
             
            </View>
            </View>

            <TextInput style={styles.search}
              placeholder="    Search for help"
              onChangeText={(Text)=>(Text)} 
              />

            <View style= {styles.menu}>

             <View style = {{width: 100, flexDirection: 'row', justifyContent: 'space-between',marginLeft: 230,marginTop: 10,alignItems: 'center'}}>
             <TouchableOpacity>
             <Entypo name="location-pin" size={24} color="black" />
             </TouchableOpacity>
             <TouchableOpacity>
             <Ionicons name="person" size={20} color="black" /></TouchableOpacity>
             <TouchableOpacity>
             <Feather name="menu" size={24} color="black" /></TouchableOpacity>
             </View>

             <ScrollView horizontal = {true}>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between',padding: 10, marginTop: 10,marginBottom: 25}}>
                  
                <TouchableOpacity>
                  <View style = {styles.meals}>
                  <Image style= {{height:22, width: 22,marginRight: 5}}
                   source= {require('./assets/breakfast.png')}></Image>
                   <Text style ={{fontSize: 15,marginTop: 8,color:'#000',fontWeight: '700' }}>Breakfast</Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style = {styles.meals}>
                  <Image style= {{height:22, width: 22,marginRight: 5}}
                   source= {require('./assets/meal.png')}></Image>
                   <Text style ={{fontSize: 15,marginTop: 4,color:'#263238' }}>Lunch</Text>
                  </View></TouchableOpacity>
                  <TouchableOpacity>
                  <View style = {styles.meals}>
                  <Image style= {{height:16, width: 16,marginRight: 5}}
                   source= {require('./assets/candies.png')}></Image>
                   <Text style ={{fontSize: 15,marginTop: 4,color:'#263238' }}>Snacks</Text>
                  </View></TouchableOpacity>
                  <TouchableOpacity>
                  <View style = {styles.meals}>
                  <Image style= {{height:15, width: 15,marginRight: 5}}
                   source= {require('./assets/delivery-man.png')}></Image>
                   <Text style ={{fontSize: 15,marginTop: 4,color:'#263238' }}>Delivary deals</Text>
                  </View></TouchableOpacity>
                  <View style = {{ width: 120,height: 35,marginLeft:5}}>
                  <TouchableOpacity>
                  <Text style ={{fontSize: 13,marginTop: 17,color:'#1976D2', marginLeft: 6 }}>See more</Text>
                  </TouchableOpacity>
                  </View>
                 
                </View>
                </ScrollView>

            <ScrollView>
            <View style= {{width: '100%'}}>
              <Details image={english} name="English Breakfast"
              description="Bread, Bacon, Egges, Beans, Sausages" price={25.00} ThisFunction={ThisFunction} setThisFunction={setThisFunction}></Details>

              <Details image={easy} name="Easy Breakfast"
              description="Toast, Eggs, Tomato, Bacon, Russion" price={19.00} ThisFunction={ThisFunction} setThisFunction={setThisFunction}></Details>

              <Details image={wings} name="Wings Breakfast"
              description="Waffles, Eggs, Tomato, Bacon, Sausages" price={30.00} ThisFunction={ThisFunction} setThisFunction={setThisFunction}></Details>
              <Details image={Pancake} name="Pancake Breakfast"
              description="Pancake, Bacon, Grape, Strawberry" price={27.00} ThisFunction={ThisFunction} setThisFunction={setThisFunction}></Details>
              <Details image={Veggie} name="Veggie Breakfast"
              description="Avocado, Eggs, Papper, Green beans" price={15.00} ThisFunction={ThisFunction} setThisFunction={setThisFunction}></Details>
              <Details image={continental} name="Continental Breakfast"
              description="Bacon, Eggs, Mushroom,Tomato, Bread" price={22.00} ThisFunction={ThisFunction} setThisFunction={setThisFunction}></Details>
              </View>
              </ScrollView>

              <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style = {{backgroundColor: '#CFD8DC',width: 230, height: 25,borderWidth:2,borderColor:'#B0BEC5'
              ,borderBottomLeftRadius: 20,marginTop:7,marginBottom:5,borderTopRightRadius: 20,marginLeft: 10}}>
                <Text style = {{fontSize:   13, color:'#455A64', marginLeft: 10}}>The total price of your order is  M{ThisFunction} </Text>
              </View>
              <TouchableOpacity>
              <View style = {{width:80, height: 25, backgroundColor: '#1565C080', borderRadius: 30,marginLeft: 10,marginTop: 7}}>
               <Text style = {{fontSize:   11, color:'#000', marginLeft: 6,marginTop: 5}}>Make Payment</Text>
              </View>
              </TouchableOpacity>
              </View>
            </View>

          </ImageBackground>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
     justifyContent: 'space-between',
     width: '97%'
 },
 menu: {
   backgroundColor: '#ECEFF1',
   width: '95%',
   height: 545,
   marginTop: 50,
   borderWidth: 1,
   borderColor: 'grey',
   alignItems: 'center',
 },
 search: {
   borderWidth: 1,
   borderColor:'#BDBDBD',
   borderRadius: 17,
   width: 110,
   marginLeft: 130,
   marginTop: 80,
   padding: 5,
   height: 27,
   marginBottom: 10
 },
 meals: {
   borderWidth: 1,
   borderColor: '#90A4AE',
   width: 110,
   height: 35,
   borderRadius: 15,
   marginLeft: 10,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   justifyContent: 'center',
  
 }
});