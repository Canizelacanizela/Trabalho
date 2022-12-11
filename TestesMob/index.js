import {useState} from "react"
import { View, Image,StyleSheet, TouchableOpacity, TextInput, Text} from 'react-native';
import Button from '../../components/button/index';

import styles from './style';

export default function SignIn({navigation}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

  const login = () => {
    fetch("", {
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
          uri: '',
        }}
      />

        <TextInput style={styles.input}
        icon="mail"
        placeholder=" E-mail"
        onChangeText={(e)=>{setEmail(e)}}
        value={email}
        
      />
        <TextInput style={styles.input}
        icon="lock"
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
            <Line />

            <ExtraText>Ainda não tem uma conta?</ExtraText>
            <TextLinkContent onPress={() => {
             navigation.navigate("Cadastro");
            }}>Cadastre-se</TextLinkContent>
        </View>
    )
}