import { HTTPClient } from "@/configuration/http";
import type { CustomerRegister } from "@/types/CustomerRegister";

class AuthService {
    
    async register(payload: CustomerRegister) {
        try {
            const response = await HTTPClient.post('/auth/register', { ...payload });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async login(email: String, senha: String) {
        try {
            const response = await HTTPClient.post('/auth/login', { email, senha });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
}

export default new AuthService();