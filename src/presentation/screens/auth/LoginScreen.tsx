/* eslint-disable react-native/no-inline-styles */
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MyIcon} from '../../components/ui/MyIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator';
import {API_URL, STAGE} from '@env';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}
export const LoginScreen = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  console.log({apiUrl: API_URL, stage: STAGE});

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Log in</Text>
          <Text category="p2">Please, enter email and password to log in</Text>
        </Layout>

        {/* Inputs */}

        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Email"
            accessoryLeft={<MyIcon name="email-outline" />}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{marginBottom: 10}}
          />
          <Input
            placeholder="Password"
            accessoryLeft={<MyIcon name="lock-outline" />}
            autoCapitalize="none"
            secureTextEntry
            style={{marginBottom: 10}}
          />
        </Layout>

        {/* Space */}

        <Layout style={{height: 20}} />
        {/* Button */}
        <Layout>
          <Button
            onPress={() => {}}
            accessoryRight={<MyIcon name="arrow-forward-outline" white />}>
            <Text>Enter</Text>
          </Button>
        </Layout>

        {/* Create new account */}
        <Layout style={{height: 50}} />

        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>No account? </Text>
          <Text
            status="primary"
            category="s1"
            onPress={() => navigation.navigate('RegisterScreen')}>
            Register now
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
