import React, { useContext } from 'react';
import { View, Button } from 'react-native';

import AuthContext from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return(
    <View 
      style={{ 
        flex: 1, 
        justifyContent: 'center' 
      }}
    >
      <Button title="Sign out" onPress={handleSignOut}/>
    </View>
  );
}

export default Dashboard;