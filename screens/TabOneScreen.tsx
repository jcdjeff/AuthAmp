import { Alert, Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Amplify, {Auth} from 'aws-amplify'
import React from 'react';
import Colors from '../constants/Colors';

const TabOneScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {

  async function onLogout () {
        Auth.signOut()
        }
        
  const twoButtonAlert = () =>
        Alert.alert('Logout', 'Are you sure you want to log out?', [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        { text: 'Log out', onPress: () => onLogout() },
        ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Button
        title="Logout"
        color={Colors.light.tint}
        // onPress={onLogout}
        onPress={twoButtonAlert}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default TabOneScreen;
