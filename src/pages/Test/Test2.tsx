import { useEffect, useRef, useState, ChangeEvent, FormEvent } from 'react';
import { Flex, Form, Input, Button } from 'antd';

interface Avatar {
    name: string;
    url: string;
}

function Test2() {
    const formRef = useRef<HTMLFormElement>(null);
    const avatarRef = useRef<HTMLInputElement>(null);
    const [avatar, setAvatar] = useState<Avatar | null>(null);
    const [pdfFile, setPdfFile] = useState<File | null>(null);

    useEffect(() => {

    }, []);

    const handleSubmit2 = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const formDataObject: Record<string, any> = {};
        for (const [key, value] of formData.entries()) {
            formDataObject[key] = value;
        }
        console.log('Form data:', formDataObject);
    };

    const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const fileURL = URL.createObjectURL(file);
        setAvatar({
            name: file.name,
            url: fileURL
        });
        console.log('data avatar: ', {
            name: file.name,
            url: fileURL
        });
    };

    const handlePickAvatar = () => {
        avatarRef.current?.click();
    };

    return (
        <Flex vertical justify="center" align="center" style={{ height: '100vh', padding: 20 }}>
            <h1>Test Form</h1>
            <Flex vertical gap={10}>
                <form ref={formRef} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <input type="hidden" name="action" value="submit" />
                    <label htmlFor="full_name">Full name:</label>
                    <input type="text" id="full_name" name="full_name" />
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" />
                    <input hidden id="avatar" ref={avatarRef} type="file" name="avatar" accept="image/*, application/pdf" onChange={handleAvatarChange} placeholder="Vui lòng chọn" />
                    <Button onClick={handlePickAvatar}>Pick avatar</Button>
                </form>
                <button onClick={handleSubmit2}>Submit ngoài</button>
            </Flex>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10, justifyContent: 'center', alignItems: 'center',
                    padding: 20,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: 10,
                    backgroundColor: 'white'
                }}>
                <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 0 }}>Avatar bạn chọn nè: {avatar?.name}</p>
                <img style={{ width: 100, height: 100, borderRadius: 10, objectFit: 'cover' }} src={avatar?.url ?? 'https://i.pinimg.com/736x/28/dc/36/28dc36d443030e5222e4b39118f18d4e.jpg'} alt="avatar" />
            </div>
        </Flex>
    );
}

export default Test2;

