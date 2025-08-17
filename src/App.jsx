import { DarkModeProvider } from './context/DarkModeContext';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import './App.css';

export default function App() {
  return (
    <DarkModeProvider>
      <div>
        <Header />
        <LandingPage />
      </div>
    </DarkModeProvider>
  );
}
