import { Routes, Route } from 'react-router-dom';
import { Home, Test, Test2, TrySomethings, Login, SignUp } from '../pages';
import TestPromise from '../pages/Test/TestPromise';
import TestUseContext from '../pages/Test/TestUseContext';
import TestUpload from '../pages/Test/TestUpload';
import TestDragAndDrop from '../pages/Test/TestDragAndDrop';
import VideoTest from '../pages/Test/VideoTest';
import TestAnimation from '../pages/Test/TestAnimation';
import TestTraffic from '../pages/Test/TestTraffic/TestTraffic';
import TestCountDown from '../pages/Test/TestCountDown';
import TestSimple from '../TestSimple';
import HomeSimple from '../HomeSimple';

export default function AppRoutes() {
    console.log("load route nè")
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} >
                <Route path="test-3d" element={<Test />} />
            </Route>
            <Route path="/test-area" element={<TrySomethings />}>
                <Route path="test-3d" element={<Test />} />
            </Route>
            <Route path="/test-3d" element={<Test />} />
            <Route path="/test-2" element={<Test2 />} />
            <Route path="/test-promise" element={<TestPromise />} />
            <Route path="/test-use-context" element={<TestUseContext />} />
            <Route path="/test-upload" element={<TestUpload />} />
            <Route path="/test-drag-and-drop" element={<TestDragAndDrop />} />
            <Route path="/test-video" element={<VideoTest />} />
            <Route path="/test-animation" element={<TestAnimation />} />
            <Route path="/test-traffic" element={<TestTraffic />} />
            <Route path="/test-count-down" element={<TestCountDown />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
} 