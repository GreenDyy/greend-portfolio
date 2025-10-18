import { useState, useRef, FormEvent } from 'react';
import './Login.scss';
import { message } from 'antd';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import type { AxiosError } from 'axios';

interface LoginFormData {
    username: string;
    password: string;
}

const Login = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (!formRef.current) return;

            const formData = new FormData(formRef.current);
            const dataLogin = Object.fromEntries(formData) as unknown as LoginFormData;

            //validate data
            if (!dataLogin.username || !dataLogin.password) {
                message.error('Username and password are required');
                return;
            }
            if (dataLogin.username.length < 3 || dataLogin.password.length < 3) {
                message.error('Username and password must be at least 3 characters');
                return;
            }
            console.log('dataLogin', dataLogin);

            //call api
            const res = await login({ email: dataLogin.username, password: dataLogin.password });
            // Vì axios interceptor đã return response.data, nên res là data từ server
            console.log('Login response:', res);

            if (res.token) {
                message.success(res.message || 'Đăng nhập thành công');
                localStorage.setItem('token', res.token);
                if (res.user) {
                    localStorage.setItem('user', JSON.stringify(res.user));
                }
                // navigate('/')
            } else {
                message.error(res.message || 'Đăng nhập thất bại');
            }
            // formRef.current.reset() //clear form
        } catch (error) {
            console.log('Login error:', error);

            const axiosError = error as AxiosError<{ message?: string }>;
            // Xử lý lỗi từ server
            if (axiosError.response) {
                // Server trả về lỗi với message
                message.error(axiosError.response.data?.message || 'Đăng nhập thất bại');
            } else if (axiosError.request) {
                // Không kết nối được với server
                message.error('Không thể kết nối đến server');
            } else {
                // Lỗi khác
                message.error('Đã xảy ra lỗi');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='login-container'>
            <div className='login-form'>
                <h1>Đăng Nhập</h1>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <div>
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input type="text" id="username" name="username" placeholder="Nhập tên đăng nhập" disabled={isLoading} />
                    </div>
                    <div>
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" id="password" name="password" placeholder="Nhập mật khẩu" disabled={isLoading} />
                    </div>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Đang xử lý...' : 'Đăng Nhập'}
                    </button>
                    <div className="auth-links">
                        <span>Chưa có tài khoản? </span>
                        <button type="button" onClick={() => navigate('/signup')} disabled={isLoading}>Đăng ký</button>
                    </div>
                    {/* tàik hoản ttest nè */}
                    <div>
                        <p>Username: test1223</p>
                        <p>Password: 123456</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

