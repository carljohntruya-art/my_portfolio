import React from 'react';
import { AppProviders } from './app/providers';
import { AppRouter } from './app/router';
import '@/styles/globals.css';

export default function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}
