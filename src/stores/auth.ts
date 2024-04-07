import AuthService from '@/services/authService'
import type { CustomerRegister } from '@/types/CustomerRegister'
import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {

  const getToken = computed(() => {
    return localStorage.getItem('token')
  })

  const register = async (payload: CustomerRegister) => {
    try {
      const response = await AuthService.register(payload)
      localStorage.setItem('user', response.nome)
      login(payload.email, payload.senha);
      } catch (error) {
    }
  }

  const login = async (email: String, senha: String) => {
    try {
      const response = await AuthService.login(email, senha);
      localStorage.setItem('token', response.token);
      location.reload();
      } catch (error) {
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    location.reload()
  }

  return { getToken, register, login, logout }

})
