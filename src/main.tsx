import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/Home/HomePage.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './styles/variables.scss';
import './styles/global.scss';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  </StrictMode>,
)
