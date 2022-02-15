import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
       <View style={styles.container}>
       <Image source= {require('./assets/th.jpg')} style={{width : 60, height: 60 ,backgroundColor :'blue' , alignself : 'center', borderRadius: 50,}}/>

                <View style={styles.topBox}>
                <Text> 
    <Text style={{ backgroundColor: "",  color: "white" }}>                   PMAS
    </Text>
</Text>
                    <Text> 
    <Text style={{ backgroundColor: "",  color: "white" }}>                   UIIT
    </Text>
</Text>
<Text> 
    <Text style={{ backgroundColor: "",  color: "white" }}> Student name:  Hira Adil   
    </Text>
</Text>
<Text> 
    <Text style={{ backgroundColor: "",  color: "white" }}>ARID NO :         19-ARID-1245
    </Text>
</Text>
<Text> 
    <Text style={{ backgroundColor: "",  color: "white" }}>DEGREE :           BSSE  
    </Text>
</Text>
<Text> 
    <Text style={{ backgroundColor: "",  color: "white" }}>SEMESTER :       5TH
    </Text>
</Text>
                </View>
                <View style={styles.otherContainer}>
                </View>
          </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

