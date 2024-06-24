"use client"
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'; 
import Link from "next/link";
import { useSide } from './context/sideContext';
export default function Home() {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const{handleEmail,handleNom}=useSide();
  const onLogin = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch('http://localhost:3001/admin/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.status === 404 || response.status === 401) {
        const errorText = await response.text();
        setErrorMessage(errorText);
        return; 
      }

      if (!response.ok) {
        throw new Error('La réponse du réseau n’était pas correcte');
      }

      const { mytoken, admin } = await response.json();
      localStorage.setItem('authenticated', mytoken); 
      handleEmail(email);
      handleNom(admin.nom);
      router.push('/Articles'); 
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      setErrorMessage('Erreur interne du serveur');
    }
  };
  return (
    <div className="bg-white">
      <img className="h-16" src="/pic.jpeg" alt="Logo" />
      
      <div className="min-h-screen flex items-center justify-center bg-white-50">
        <div className="max-w-md w-full bg-blue-900 p-8 rounded-lg shadow-lg -mt-10">
          
          <h2 className="text-white mt-6 text-center text-3xl font-extrabold">
            Connexion
          </h2>
          <form className="mt-8 space-y-6 px-6" onSubmit={onLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="flex items-center mb-5 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm px-2">
                <UserIcon className="h-6 w-6 text-gray-500"/>
                <input
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="rounded-full focus:outline-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900"
                  placeholder="Nom d'utilisateur"
                />
              </div>
              
              <div className="flex items-center mb-5 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm px-2">
                <LockClosedIcon className="h-6 w-6 text-gray-500"/>
                <input
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="rounded-full focus:outline-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900"
                  placeholder="Mot de passe"
                />
              </div>
            </div>
            {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative flex place-self-center w-60 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
