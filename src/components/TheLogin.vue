<template>
  <div class="main-login">
    <div class="left-login">
      <h1>Faça login<br>E confira todas as licitações do mercado</h1>
      <img src="@/assets/business-decisions-amico.svg" class="left-login-image" alt="Pessoa trabalhando">
    </div>
    <div v-if="isLogin" class="right-login">
      <div class="card-login">
        <h1>CADASTRO</h1>
        <div class="textfield">
          <label for="usuario">Nome</label>
          <input v-model="userRegister.nome" type="text" name="usuario" placeholder="Digite seu nome">
        </div>
        <div class="textfield">
          <label for="usuario">E-mail</label>
          <input v-model="userRegister.email" type="text" name="usuario" placeholder="Digite seu e-mail">
        </div>
        <div class="textfield">
          <label for="password">Senha</label>
          <input v-model="userRegister.senha" type="password" name="password" placeholder="Digite sua senha">
        </div>
        <button class="btn-login" @click.prevent="register">Cadastrar</button>
        <p>Já possui conta? <a href="#" @click.prevent="toggleLogin">Login</a></p>
      </div>
    </div>
    <div v-else class="right-login">
      <div class="card-login">
        <h1>LOGIN</h1>
        <div class="textfield">
          <label for="usuario">E-mail</label>
          <input v-model="userLogin.email" type="text" name="usuario" placeholder="Digite seu e-mail">
        </div>
        <div class="textfield">
          <label for="password">Senha</label>
          <input v-model="userLogin.senha" type="password" name="password" placeholder="Digite sua senha">
        </div>
        <button class="btn-login" @click.prevent="login">Login</button>
        <p>Ainda não tem login? <a href="#" @click.prevent="toggleLogin">Registre-se</a></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type{ CustomerRegister } from '@/types/CustomerRegister';
import type{ CustomerLogin } from '@/types/CustomerLogin';
import { useAuthStore } from '@/stores/auth';
import { reactive, ref } from 'vue';

const auth = useAuthStore();

let isLogin = ref<Boolean>(true);

const toggleLogin = () => {
  isLogin.value = !isLogin.value; 
}

let userRegister = reactive<CustomerRegister>({
  nome: '',
  email: '',
  senha: ''
});

let userLogin = reactive<CustomerLogin>({
  email: '',
  senha: ''
});

const register = () => {
  auth.register(userRegister);
}

const login = () => {
  auth.login(userLogin.email, userLogin.senha);
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

body {
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
}

body * {
  box-sizing: border-box;
}

.main-login {
  width: 100vw;
  height: 100vh;
  background: #201b2c;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-login {
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.left-login > h1 {
  color: #77ffc0;
  font-size: 2.5vw;
}

.left-login-image {
  width: 35vw;
}

.right-login {
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-login {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 35px;
  background: #2f2841;
  border-radius: 20px;
  box-shadow: 0px 10px 40px #00000056;
}

.card-login > h1 {
  color: #00ff88;
  font-weight: 800;
  margin: 0;
}

.card-login > p {
  color: #fff;
}

.card-login > p > a {
  text-decoration: none;
  color: #00ff88; 
}

.textfield {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0px;
}

.textfield > input {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 15px;
  background: #514869;
  color: #f0ffffde;
  font-size: 12pt;
  box-shadow: 0px 10px 40px #00000056;
  outline: none;
  box-sizing: border-box;
}

.textfield > label {
  color: #f0ffffde;
  margin-bottom: 10px;
}

.textfield > input::placeholder {
  color: #f0ffff94;
}

.btn-login {
  width: 100%;
  padding: 16px 0;
  margin: 25px;
  border: none;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 3px;
  color: #2b134b;
  background: #00ff88;
  cursor: pointer;
  box-shadow: 0px 10px 40px -12px #00ff8052;
}

@media only screen and (max-width: 950px){
  .card-login{
    width: 85%;
  }
}

@media only screen and (max-width: 600px){
  .main-login{
    flex-direction: column;
  }

  .left-login {
    display: none;
  }
  
  .right-login {
    width: 100%;
    height: auto;
  }

  .left-login-image {
    width: 40vh;
  }

  .card-login {
    width: 90%;
  }
}
</style>
