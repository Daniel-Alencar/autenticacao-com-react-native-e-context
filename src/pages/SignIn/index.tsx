import React, { useContext } from 'react';
import { View, Button } from 'react-native';

import AuthContext from '../../contexts/auth';

const SignIn: React.FC = () => {

  const { signed, signIn } = useContext(AuthContext);

  function handleSignIn() {
    signIn();
  }

  return(
    <View 
      style={{ 
        flex: 1, 
        justifyContent: 'center' 
      }}
    >
      <Button title="Sign in" onPress={handleSignIn}/>
    </View>
  );
}

export default SignIn;