import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
export default function App() {
  const [postagem, setPostagem] = useState();

  useEffect(() => {
    fetch("")
    .then(res => {return res.json()})
    .then(data => {
      setPostagem(data);
    })
  });

  return (
    <View style={styles.container}>
      {
        (postagem !== undefined)
        ?
        <View>
          <Text>{postagem.nome}</Text>
          <Text>{postagem.data_post}</Text>

<TouchableOpacity onPress={() => {excluir()}}>
    <Image style={styles.iconstyle} source={require('')} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> {alterar()}}>
    <Image style={styles.iconstyle} source={require('')} />
</TouchableOpacity>

          <View>
          <Text>{postagem.titulo}</Text>
          <Text>{postagem.conteudo}</Text>
          </View>
        </View>
        :
        <View>
          {/* <Image style={styles.img} source={{uri: "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"}}/> */}
        </View>
      }
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
  img: {
    width: '100px',
    height: '100px',
  }
});