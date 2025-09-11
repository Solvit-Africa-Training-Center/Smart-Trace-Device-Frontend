import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LostItemsProvider } from './context/ItemContext.tsx';

createRoot(document.getElementById("root")!).render(
  <LostItemsProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </LostItemsProvider>
);
