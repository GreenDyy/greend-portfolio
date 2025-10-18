import { createContext, useState, useEffect, useContext } from "react";
import type { ReactNode } from "react";

interface AuthContextType {
  name: string;
  setNameCustomer: (name: string) => void;
  setName: (name: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

//để bọc vào app
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState('no name');

  useEffect(() => {
    console.log('current name', name)
  }, [name]);

  const setNameCustomer = (name: string) => {
    console.log('tao đã nhận được name', name)
    setName(name);
    localStorage.setItem("name", JSON.stringify(name));
  };

  return (
    <AuthContext.Provider value={{ name, setNameCustomer, setName }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook để sử dụng AuthContext dễ dàng hơn
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

//để dùng chung cho các component
export default AuthContext;
