import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles, myStyle } from './assets/styles/myStyles';

export default function App() {
  return (
    <View style={[styles.container, myStyle.viewAlign, { borderRadius: 20 }]}>
      {/* <StatusBar style="auto" /> */}

      <View style={[myStyle.viewAlign, myStyle.marginWid, { flex: 3.9, backgroundColor: '#f4a460' }]}>
        <Text style={styles.texts}>Banner</Text>
      </View>
      <View style={[myStyle.viewAlign, myStyle.marginWid, { flex: 1, backgroundColor: '#66cdaa' }]}>
        <Text style={styles.texts}>NavBar</Text>
      </View>
      <View style={[myStyle.viewAlign, myStyle.marginWid, { flex: 10, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#808000' }]}>

        <View style={{ backgroundColor: '#32cd32', flex: 1, alignItems: 'center', height: '25%' }}>
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
        </View>

      </View>
      <View style={[myStyle.viewAlign, myStyle.marginWid, { flex: 1, backgroundColor: '#ff4500', marginBottom: 5 }]}>
        <Text style={styles.texts}>Footer</Text>
      </View>
    </View >
  );
}



