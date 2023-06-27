import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skill/Skills';
import Work from './components/work/Work';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';

export default function App() {
    return (
        <div>
            <Header/>
            <main className="main">
                <Home/>
                <About/>
                <Skills/>
                <Services/>
                <Qualifications/>
                <Work/>
                <Testimonials/>
                <Contact/>
            </main>
            <Footer/>
            <ScrollUp/>
        </div>
    );
};
