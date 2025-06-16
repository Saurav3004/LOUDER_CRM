import axios from "axios"

export const fetchClients = async (setClients) => {
    try {
       const response = await axios.get("http://localhost:5000/api/leads/getAllLeads");
        setClients(response.data)
    } catch (error) {
        console.log(error)
    }
}