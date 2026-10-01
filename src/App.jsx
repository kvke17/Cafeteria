import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Section />
      </main>
      <Footer />
    </div>
  );
}