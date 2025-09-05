import Header from './features/layout/Header';
import Footer from './features/layout/Footer';
import Hero from './features/search/Hero';
import SearchSection from './features/search/SearchSection';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <SearchSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;