import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext'
import AppRoutes from './routes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;