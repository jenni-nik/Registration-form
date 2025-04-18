import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { playEngineSound } from '../utils/playSound';

export default function Form() {
  const [form, setForm] = useState({ name: '', email: '', carModel: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playEngineSound();
    console.log("🚗 Зареєстровано:", form);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative z-10 bg-black bg-opacity-70 p-8 rounded-2xl shadow-2xl w-full max-w-md backdrop-blur-sm border-2 border-yellow-400"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-0 left-1/2 w-40 h-20 -translate-x-1/2 blur-xl bg-yellow-400 opacity-30 animate-pulse" />
      <h2 className="text-3xl font-extrabold mb-6 text-center text-yellow-400 font-mono uppercase">
        Garage Pro
      </h2>

      <input
        className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 neon-focus"
        type="text"
        name="name"
        placeholder="Ваше ім’я"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 neon-focus"
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        className="w-full p-3 mb-6 rounded-lg bg-gray-800 text-white placeholder-gray-400 neon-focus"
        type="text"
        name="carModel"
        placeholder="Модель авто"
        value={form.carModel}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg uppercase tracking-wider transition-all duration-300 shadow-lg"
      >
        Зареєструвати авто
      </button>
    </motion.form>
  );
}