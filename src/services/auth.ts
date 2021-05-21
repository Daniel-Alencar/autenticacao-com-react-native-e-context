interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

// Simulação de chamada da API
export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'token2210',
        user: {
          name: 'Daniel',
          email: 'danielalencar746@gmail.com',
        },
      });
    }, 2000);
  });
}
