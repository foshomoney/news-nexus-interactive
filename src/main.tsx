
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('main.tsx: Script starting to load');
console.log('main.tsx: Current location:', window.location.href);
console.log('main.tsx: Base URL:', import.meta.env.BASE_URL);

const rootElement = document.getElementById("root");
console.log('main.tsx: Root element found:', !!rootElement);

if (rootElement) {
  console.log('main.tsx: Creating React root');
  const root = createRoot(rootElement);
  console.log('main.tsx: Rendering App component');
  root.render(<App />);
} else {
  console.error('main.tsx: Root element not found!');
}
