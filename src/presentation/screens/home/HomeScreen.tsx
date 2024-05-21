/* eslint-disable react-native/no-inline-styles */
import {Layout, Text, Button, Icon} from '@ui-kitten/components';
import React from 'react';

export const HomeScreen = () => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>

      <Button accessoryLeft={<Icon name="facebook" />}>End Session</Button>
    </Layout>
  );
};
