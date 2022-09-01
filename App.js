import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { styles, myStyle } from './assets/styles/myStyles';
import Banner from './components/Banner';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  //estados
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(0);

  let calcular = (operador) => {
    let mresultado = 0;
    switch (operador) {
      case "+":
        mresultado = (parseFloat(valor1) + parseFloat(valor2));
        break
      case "-":
        mresultado = (parseFloat(valor1) - parseFloat(valor2));
        break
      case "/":
        mresultado = (parseFloat(valor1) / parseFloat(valor2));
        break
      case "*":
        mresultado = (parseFloat(valor1) * parseFloat(valor2));
        break
    }

    setResultado(mresultado)
  }

  return (
    <View style={[styles.container, myStyle.viewAlign, { borderRadius: 20 }]}>

      <Banner src="mario.webp" subTitle="Cesde"></Banner>

      <View style={[myStyle.viewAlign, myStyle.marginWid, { flex: 1, backgroundColor: '#66cdaa' }]}>
        <Text style={styles.texts}>NavBar</Text>
      </View>
      <View style={[myStyle.viewAlign, myStyle.marginWid, { flex: 10, backgroundColor: '#808000' }]}>

        {/*     <View style={{ backgroundColor: '#32cd32', flex: 1, alignItems: 'center', height: '25%' }}>
          <Image
            source={{ uri: 'https://picsum.photos/50/50' }}
            style={[myStyle.image, { flex: 1 }]}
          />
        </View>
        <View style={{ backgroundColor: '#ffff00', flex: 1, alignItems: 'center', height: '25%' }}>
          <Image
            source={{ uri: 'https://picsum.photos/200/200' }}
            style={[myStyle.image, { flex: 1 }]}
          />
        </View>
        <View style={{ backgroundColor: '#4169e1', flex: 1, alignItems: 'center', height: '25%' }}>
          <Image
            source={{ uri: 'https://picsum.photos/100/100' }}
            style={[myStyle.image, { flex: 1 }]}
          />
        </View> */}

        <Text> Valor1</Text>
        <TextInput placeholder='Ingrese valor 1'
          style={{ color: 'blue', padding: 8, borderWidth: 2, borderRadius: 5, textAlign: 'center' }}
          autoFocus={true}
          onChangeText={valor1 => setValor1(valor1)}
          value={valor1}
        />

        <Text> Valor2</Text>
        <TextInput placeholder='Ingrese valor 2'
          style={{ color: 'blue', padding: 8, borderWidth: 2, borderRadius: 5, textAlign: 'center' }}
          autoFocus={true}
          onChangeText={valor2 => setValor2(valor2)}
          value={valor2}
        />
        <Text>Resultado</Text>
        <Text> {resultado}</Text>
        <Button
          title="sumar"
          onPress={() => calcular('+')}
        />
        <TouchableOpacity
          style={{ backgroundColor: 'orange', marginTop: 10, width: 100 }}
          onPress={() => calcular('-')}
        >
          <Text style={{ color: 'white', padding: 10, textAlign: 'center', fontSize: 20, }}>Restar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'green' }}
          onPress={() => calcular('/')}
        >
          <Text style={{ color: 'white' }}>Dividir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'brown' }}
          onPress={() => calcular('/')}
        >
          <Text style={{ color: 'white' }}>Multiplicar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'blue', marginTop: 10, width: 100 }}
          onPress={() => {
            setValor1('');
            setValor2('');
            setResultado('');
          }}
        >
          <Text style={{ color: 'white', padding: 10, textAlign: 'center', fontSize: 20 }}>Clear</Text>
        </TouchableOpacity>


      </View>
      <View style={[myStyle.viewAlign, myStyle.marginWid, { flex: 1, backgroundColor: '#ff4500', marginBottom: 5 }]}>
        <Text style={styles.texts}>Footer</Text>
      </View>
    </View >
  );
}



