import React from 'react';
import {
  Container,
  Content,
  Body,
  Title,
  Header,
  ListItem,
  Text,
  Left,
  Button,
  Icon,
  Right,
} from 'native-base';
import {Auth, firebase} from '../Setup';
import {TimePickerAndroid} from 'react-native';

export function HomeScreen({navigation}) {
  return (
    <Container>
      <Header>
        <Body>
          <Title>React Native Firebase Tutorial</Title>
        </Body>
      </Header>
      <Content>
        <ListItem onPress={() => navigation.navigate('Auth')}>
          <Text>Authentication</Text>
        </ListItem>
        <ListItem onPress={() => navigation.navigate('Auth')}>
          <Text>Realtime Database</Text>
        </ListItem>
        {/* <ListItem onPress={() => navigation.navigate('Auth')}>
          <Text>Authentication</Text>
        </ListItem>
        <ListItem onPress={() => navigation.navigate('Auth')}>
          <Text>Authentication</Text>
        </ListItem>
        <ListItem onPress={() => navigation.navigate('Auth')}>
          <Text>Authentication</Text>
        </ListItem> */}
      </Content>
    </Container>
  );
}
