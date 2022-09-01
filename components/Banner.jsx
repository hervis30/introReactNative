import { StyleSheet, Text, View, Image } from "react-native";
import { styles, myStyle } from '../assets/styles/myStyles';
//import mario from '../assets/img/mario.webp'

export default function Banner(props) {
    return (
        <View style={[myStyle.viewAlign, myStyle.marginWid, { flex: 3.9, backgroundColor: '#f4a460' }]}>
            {/*  <Text style={styles.texts}>{props.title}</Text>
            <Text>{props.subTitle}</Text> */}
            <Image
                source={require(`../assets/img/${props.src}`)}
                style={{ width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 10 }}
            >

            </Image>
        </View>
    );
}