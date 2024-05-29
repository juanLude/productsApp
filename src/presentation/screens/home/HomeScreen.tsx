/* eslint-disable react-native/no-inline-styles */
import {Layout, Text, Button, Icon} from '@ui-kitten/components';
import React from 'react';
import {useAuthStore} from '../../store/auth/useAuthStore';

export const HomeScreen = () => {
  const {logout} = useAuthStore();
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>

      <Button
        accessoryLeft={
          <Icon
            name="log-out-outline"
            onPress={() => {
              logout;
            }}
          />
        }>
        End Session
      </Button>
    </Layout>
  );
};
