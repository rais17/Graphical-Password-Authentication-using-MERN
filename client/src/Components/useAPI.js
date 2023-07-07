import { useState } from "react";

const useAPI = () => {
    const [responseData, setResponseData] = useState({});
    const fetchDataFromDB = async (source, data) => {
        try {

            const response = await fetch(`/api/v1/${source}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            return result;
        }
        catch (error) {
            return {};
        }
    };
    return { fetchDataFromDB, setResponseData, responseData}
};

export default useAPI