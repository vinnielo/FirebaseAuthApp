import React, {useState, useEffect} from 'react';
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
  Form,
  Item,
  Label,
  Input,
} from 'native-base';
import {Auth, firebase} from '../Setup';
import {TimePickerAndroid} from 'react-native';
import {SignUpUser, SignInUser, SignOutUser} from '../Api';

export function AuthScreen({navigation}) {
  const [state, setState] = useState({
    emailAddress: '',
    password: '',
  });

  const [user, setUser] = useState();

  const signOut = () => {
    SignOutUser()
    .then((data) => {
      alert(data);
    })
    .catch((err) => {
      alert(err);
    });
  };

  const signUp = () => {
    SignUpUser(state.emailAddress, state.password)
      .then((data) => {
        alert(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const signIn = () => {
    SignInUser(state.emailAddress, state.password)
      .then((data) => {
        alert(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onAuthStateChanged = (user) => {
    setUser(user);
  };

  useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <Container>
      <Header>
        <Left>
          <Button hasText transparent onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </Button>
        </Left>
        <Body>
          <Title>Authentication</Title>
        </Body>
        <Right>
          {user && (
            <Button hasText transparent onPress={signOut}>
              <Text>Logout</Text>
            </Button>
          )}
        </Right>
      </Header>
      <Content padder>
        {/* sign up form */}
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              keyboardType="email-address"
              value={state.emailAddress}
              onChangeText={(text) => setState({...state, emailAddress: text})}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry
              value={state.password}
              onChangeText={(text) => setState({...state, password: text})}
            />
          </Item>
          <Button block onPress={signUp}>
            <Text>Sign Up</Text>
          </Button>
        </Form>

        {/* sign in form */}
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              keyboardType="email-address"
              value={state.emailAddress}
              onChangeText={(text) => setState({...state, emailAddress: text})}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry
              value={state.password}
              onChangeText={(text) => setState({...state, password: text})}
            />
          </Item>
          <Button block onPress={signIn}>
            <Text>Sign In</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
