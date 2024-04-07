import { HTTPClient } from "@/configuration/http";

class BiddingService {
    
    async getBiddings() {
        try {
            const response = await HTTPClient.get('/licitacao');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default new BiddingService();