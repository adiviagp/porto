import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import TechStack from '@components/TechStack';
import Projects from '@components/Projects';
import ScrollSpy from 'react-ui-scrollspy';
import Footer from '@components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <ScrollSpy>
          <Hero />
          <TechStack />
          <Projects />
        </ScrollSpy>
      </main>

      <Footer />
    </>
  );
}

export default App;
