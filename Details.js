import { StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView,TouchableOpacity,TextInput} from 'react-native';
import {useState} from 'react';
import { Feather } from '@expo/vector-icons';

export default function Details({image, description, name, price, plus,minus, Totalprice,thisFunction}) {
    const[ItemCount,setItemCount] = useState(0);
    function order(){
        setItemCount(ItemCount + 1);
      // thisFunction(Totalprice + price);
    }

    function orderless(){
        setItemCount(ItemCount - 1)
    }

  return (
     <View style= {{marginBottom: 20,marginLeft: 20, borderBottomWidth: 1,borderBottomColor: '#CFD8DC'}}>

         <ImageBackground style= {{height:145, width: 300, marginBottom: 5, alignItems: 'center',
         justifyContent: 'center'}} imageStyle={{borderRadius: 15}} source= {image}>
            <View style = {{width: 110, height: 20, borderWidth:1,borderColor: '#E0E0E0', marginTop: 85,
            backgroundColor: '#00000090', alignItems: 'center'}}>
                <Text style= {{fontSize: 14,color:'#eee'}}>{name}</Text>
            </View>
         </ImageBackground>
        
            <View style={{height: 40, width: 100,backgroundColor: '#eee',marginLeft:-45,marginTop: -30,borderRadius: 150}}>
            <Text style= {{fontSize: 18,color:'#000',fontWeight: '700',marginLeft: 45,marginTop: 6}}> M{price}</Text>
            </View>
             
            <View style ={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style= {{fontSize: 12,color:'#000',marginTop:-10}}>{description}</Text>

            <View style= {{flexDirection: 'row',justifyContent: 'space-between', width: 315,marginTop:-10,marginLeft: 50}}>
            <View style = {{width: '80%',alignItems: 'center',flexDirection: 'row'}}>
            <TouchableOpacity>
            <Text style= {{fontSize: 15,color:'#000',fontWeight: '600',marginRight:10}} onPress={orderless}>{minus}</Text>
            </TouchableOpacity>
            <Text style= {{fontSize: 18,color:'#000',fontWeight: '700',marginRight:10}}>{ItemCount}</Text>
            <TouchableOpacity>
            <Text style= {{fontSize: 15,color:'#000',fontWeight: '600' }}  onPress={order}>{plus}</Text>
            </TouchableOpacity>
            </View>
            </View>
           

        
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  });
