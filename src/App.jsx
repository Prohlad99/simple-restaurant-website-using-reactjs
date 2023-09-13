import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { store } from './app/store'
import { router } from './routes/router'

function App() {

  return (
    <>
      <Provider store={store}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </Provider>
    </>
  );
}

export default App
