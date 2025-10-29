import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.jsx'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient();


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </ClerkProvider>
    </QueryClientProvider>
  </StrictMode>,
)
