import axios from 'axios';

export const getProfleByUsername = async (id: number) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/test/get-profile-by-id/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}

export const helloName = async (name: string) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/test/hello-name`, {
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            name: name
        }
    });
    return response.data;
}

export const testMockData = async () => {
    const res = await axios.get(`https://n8n.naiscorp.com/webhook-test/mock/users`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res;
}


export const testMockDataPostMethod = async (data: any) => {
    const res = await axios.post(
        `https://n8n.naiscorp.com/webhook-test/mock/text`,
        data,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return res;
};
