// src/pages/index.tsx (o Home.tsx)
'use client';
import dynamic from 'next/dynamic';
import React from "react";

const Login = dynamic(() => import('./components/auth/login'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

export default function Home() {
  return (
      <div>
        <Login onLogin={(username, password) => {
          console.log(username, password);
        }} />
      </div>
  );
}
