import { Routes, Route } from 'react-router-dom';
import { Home, PlayGround, Login, SignUp, Games } from '../pages';
import Test from '../pages/PlayGround/tests/Test';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} >
                <Route path="test-3d" element={<Test />} />
            </Route>
            
            {/* PlayGround - Route động cho tất cả test pages */}
            <Route path="/playground/:testType" element={<PlayGround />} />
            <Route path="/playground" element={<PlayGround />} />
            
            {/* Games - Trang hiển thị các game */}
            <Route path="/games" element={<Games />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
} 