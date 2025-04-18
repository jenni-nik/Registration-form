import React from 'react';
import Form from './components/Form';
import SpinningWheels from './components/SpinningWheels';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative overflow-hidden">
      <SpinningWheels />
      <Form />
    </div>
  );
}