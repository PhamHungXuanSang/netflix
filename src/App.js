import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';

function App() {
    return (
        <>
            <AuthContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Signup" element={<SignUp />} />
                    <Route path="/Login" element={<Login />} />
                    <Route
                        path="/Account"
                        element={
                            <ProtectedRoute>
                                <Account />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </AuthContextProvider>
        </>
    );
}

export default App;
