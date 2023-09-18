import axios from 'axios';

const baseUrl = 'http://localhost:8080';

const PersonasAPI = () => {
    async function getTodasPersonas() {
        let response = null;

        try {
            response = await axios.get(`${baseUrl}/personas`);
        } catch (error) {
            // Handle errors
            console.log("Error: " + error);
        }

        return response;
    }

    return { getTodasPersonas }
}

export default PersonasAPI;