import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAutenticacao:user');
      const storagedToken = await AsyncStorage.getItem('@RNAutenticacao:token');

      if(storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
    }
    
    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);

    await AsyncStorage.setItem('@RNAutenticacao:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAutenticacao:token', response.token);
  } 

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return(
    <AuthContext.Provider 
      value={{ 
        signed: Boolean(user),
        user: user,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;