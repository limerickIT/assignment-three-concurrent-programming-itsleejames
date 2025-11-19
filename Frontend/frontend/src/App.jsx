import { useState } from "react";
import api from "./api/client";

function App() {
    const [message, setMessage] = useState("");

    const testConnection = async () => {
        try {
            const res = await api.get("/test");
            setMessage(res.data);
        } catch (err) {
            setMessage("ERROR connecting to backend");
            console.error(err);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Zelora React App</h1>
            <button onClick={testConnection}>Test Backend Connection</button>
            <p>{message}</p>
        </div>
    );
}

export default App;
