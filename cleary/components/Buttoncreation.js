import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Buttoncreation = ({ }) => {
    const navigation = useNavigation();
    return (
        <View style={{ paddingTop: 100, marginBottom: 20 }}>
            <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
                <TouchableOpacity onPress={()=>navigation.navigate('Signupscreen')} style={{
                    paddingTop: 20,
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: '#10286e',
                    width: 128,
                    backgroundColor: "#ffff",
                    borderRadius: 16.8,
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingRight: 48,
                    paddingLeft: 48
                }
                }>
                    <Text style={{ textAlign: "center", color: "#10286e" }}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    paddingTop: 20,
                    alignItems: "center",
                    borderWidth: 0.5,
                    width: 128,
                    backgroundColor: "#10286E",
                    borderRadius: 16.8,
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingRight: 48,
                    paddingLeft: 48
                }
                }>
                    <Text style={{ textAlign: "center", color: "#ffff" }}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Buttoncreation