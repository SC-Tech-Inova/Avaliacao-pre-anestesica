import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const Login: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, action: 'login' }),

    });

    const data = await response.json();

    if (data.success) {
      sessionStorage.setItem('user', JSON.stringify(data.user));
      sessionStorage.setItem('isNewLogin', 'true');
      router.push('/PatientList');
    } else {
      console.error('Authentication failed');
      console.error(data.message || 'Authentication failed');

    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="text-2xl font-bold mb-6">Sistema de Avaliação Pré-Anestésica</h1>
        <h2 className="text-xl mb-4">Login</h2>


        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="input-group">
            <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Usuário</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              autoComplete="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="input-group">
            <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Senha</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              autoComplete="current-password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Entrar

          </Button>

        </form>
      </div>
    </div>
  );
};

export default Login;
