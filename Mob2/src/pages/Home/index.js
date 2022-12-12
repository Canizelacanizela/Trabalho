import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
export default function App() {
  const [postagem, setPostagem] = useState([]);

 

  useEffect(() => {
    fetch("http://10.87.207.28:5000/forum/posts")
    .then(res => {return res.json()})
    .then(data => {
      setPostagem(data);
    })
  });


  return (
    <View >
        <View style={styles.container} >
        <ScrollView>
            {
 postagem.map((posts, index) => {
    return (
        <View style={styles.containers} key={index} >
            
            <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/3615/3615319.png"}}/>
            <Text>{`${posts.nome}        ${posts.data_post}`}</Text>
            <Text>{`${posts.titulo}`}</Text>
            <View style={styles.hairline} />
            <Text>{`${posts.conteudo}`}</Text>
            <TouchableOpacity></TouchableOpacity>
        </View>
    )
})
            }
        </ScrollView>
        </View>

    </View>
  );
}