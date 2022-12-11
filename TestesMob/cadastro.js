import {useState} from "react"
//import { useHistory } from 'react-router-dom'
// usar se o useHistory nao estiver funcionando import { useNavigate } from 'react-router-dom'
import { View, Image,StyleSheet, TouchableOpacity, TextInput, Text} from 'react-native';
import Button from '../../components/button/index';

import styles from './style';

export default function SignIn({navigation}) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    //const history = useHistory
    //const navigate = useNavigate();

  const cadastro = () => {
   fetch("/forum/", {
      "method": "POST",
      "headers":{
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({
          "nome":nome,
          "email": email,
          "senha": senha
      })
    })
    .then(res => {return res.json()})
    localStorage.setUser("user", JSON.stringify(result))
    navigation.navigate("Login");
    //history.push("/add")
    // navigate("/add") ou navigation.navigate("Login");

//
//     .then(res => {return res.json()})
//     .then(data => {
//       if(data.id_user !== undefined){
//         navigation.navigate("Login");
    
    }
}

    return(
        <View style={styles.container}>
          
<Image style={styles.dog}
        source={{uri: ''}}
      />


  <TextInput style={styles.input}
        
        placeholder=" Nome"
        onChangeText={(e)=>{setNome(e)}}
        value={nome}
        
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
                cadastro()
            }}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            <Line />

            <ExtraText>Já tem uma conta?</ExtraText>
            <TextLinkContent onPress={() => {
             navigation.navigate("Login");
            }}>Faça Login</TextLinkContent>
        </View>
    )

