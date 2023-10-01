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

    async function savePersona(persona) {
        let response = null;

        try {
            response = await axios.post(`${baseUrl}/personas`, persona)
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    console.log("Invalid Parameter");
                }
            }

            console.log("Error: " + error);
        }

        return response;
    }

    return { getTodasPersonas, savePersona }
}

export default PersonasAPI;