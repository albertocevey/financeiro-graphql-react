import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Cartoes from './component/pages/Cartoes'
import Cartao from './component/pages/Cartao';
import Route from './component/routes/routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "/cartao/",
        element: <Cartao />,
      },
      {
        path: "/cartoes/",
        element: <Cartoes />,
      },
    ]
  },
  
]);
const queryClient = new QueryClient()

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App