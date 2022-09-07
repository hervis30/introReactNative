import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { styles, myStyle } from './assets/styles/myStyles';
import Banner from './components/Banner';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

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
        {/* <Button
          title="sumar"
          onPress={() => calcular('+')}
        /> */}
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ backgroundColor: '#00ffff', marginTop: 5, marginRight: 3, width: 60, height: 50, borderRadius: 5 }}
            onPress={() => calcular('+')}
          >
            <Text style={{ color: '#000000', fontWeight: 'bold', padding: 10, textAlign: 'center', fontSize: 15 }}>Suma</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: '#ffff00', marginTop: 5, marginRight: 3, marginLeft: 3, width: 60, height: 50, borderRadius: 5 }}
            onPress={() => calcular('-')}
          >
            <Text style={{ color: '#000000', fontWeight: 'bold', padding: 10, textAlign: 'center', fontSize: 15 }}>Resta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: '#9acd32', marginTop: 5, marginRight: 3, marginLeft: 3, width: 60, height: 50, borderRadius: 5 }}
            onPress={() => calcular('/')}
          >
            <Text style={{ color: '#000000', fontWeight: 'bold', padding: 10, textAlign: 'center', fontSize: 15 }}>Div</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: '#ff1493', marginTop: 5, marginRight: 3, marginLeft: 3, width: 60, height: 50, borderRadius: 5 }}
            onPress={() => calcular('*')}
          >
            <Text style={{ color: '#000000', fontWeight: 'bold', padding: 10, textAlign: 'center', fontSize: 15 }}>Mult</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: '#ff6347', marginTop: 5, marginLeft: 3, width: 60, height: 50, borderRadius: 5 }}
            onPress={() => {
              setValor1('');
              setValor2('');
              setResultado('');
            }}
          >
            <Text style={{ color: '#000000', fontWeight: 'bold', padding: 10, textAlign: 'center', fontSize: 20 }}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[myStyle.viewAlign, myStyle.marginWid, { flex: 1, backgroundColor: '#ff4500', marginBottom: 5 }]}>
        <Text style={styles.texts}>Footer</Text>
      </View>
    </View >
  );
}



