import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://4wheelanes-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.wheelanesToken) {
                        localStorage.setItem('wheelanesToken', data.wheelanesToken);
                        setToken(data.wheelanesToken);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;