import {useState} from "react"
import { View, Image,StyleSheet, TouchableOpacity, TextInput, Text} from 'react-native';
import Button from '../../components/button/index';

import styles from './style';

export default function SignIn({navigation}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

  const login = () => {
    fetch("http://10.87.207.28:5000/forum/login", {
      "method": "POST",
      "headers":{
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({
        "email": email,
        "senha": senha
      })
    })
    .then(res => {return res.json()})
    .then(data => {
      if(data.id_user !== undefined){
        navigation.navigate("Home");
      }
    })
  }

    return(
        <View style={styles.container}>
          
<Image
        style={styles.dog}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/4645/4645838.png',
        }}
      />

        <TextInput style={styles.input}
        placeholder=" E-mail"
        onChangeText={(e)=>{setEmail(e)}}
        value={email}
        
      />
        <TextInput style={styles.input}
        placeholder=" Senha"
        value={senha}
        onChangeText={(e)=>{setSenha(e)}}
        secureTextEntry
        />
          <TouchableOpacity style={styles.button} onPress={() => {
                login()
            }}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
            

            <TouchableOpacity onPress={() => {
                navigation.navigate("Home");
            }}>
                <Text style={styles.textButton}>Ainda não é um de nós,
              <br></br>faça um cadastro aqui</Text>
            </TouchableOpacity>
            
        </View>
    )
}

