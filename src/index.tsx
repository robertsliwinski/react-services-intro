import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(
  <App />
);