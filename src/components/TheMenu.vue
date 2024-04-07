<template>
    <header v-if="token">
        <nav class="nav-bar">
            <div class="logo">
                <router-link to="/" class="nav-link"><h1>Licitações</h1></router-link>
            </div>
            <div class="nav-list">
                <ul>
                    <li class="nav-item"><router-link to="/" class="nav-link">Início</router-link></li>
                    <li class="nav-item"><router-link to="/processos" class="nav-link">Processos</router-link></li>
                </ul>
            </div>

            <div class="mobile-menu-icon">
                <button @click="menuShow()"><img ref="img" class="icon" src="@/assets/menu_white_36dp.svg" alt=""></button>
            </div>
        </nav>
        <div ref="mobileMenu" class="mobile-menu">
            <ul>
                <li class="nav-item"><router-link to="/" class="nav-link">Início</router-link></li>
                <li class="nav-item"><router-link to="/processos" class="nav-link">Processos</router-link></li>
            </ul>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import menuIcon from '@/assets/menu_white_36dp.svg';
import menuIconClose from '@/assets/close_white_36dp.svg';
import { useAuthStore } from '@/stores/auth';

const mobileMenu = ref();
const img = ref();
const auth = useAuthStore();
const token = auth.getToken;

function menuShow() {
    if (mobileMenu.value.classList.contains('open')) {
        mobileMenu.value.classList.remove('open');
        img.value.src = menuIcon;
    } else {
        mobileMenu.value.classList.add('open');
        img.value.src = menuIconClose;
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap');
* {
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
}

header {
    width: 100%;
    background-color: #201b2c;
    box-shadow: 0px 3px 10px #464646;
}

.nav-bar {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 6rem;
}

.logo {
    display: flex;
    align-items: center;
}

.logo h1 {
    color: #fff;
}

.nav-list {
    display: flex;
    align-items: center;
}

.nav-list ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

.nav-item {
    margin: 0 15px;
}

.nav-link {
    text-decoration: none;
    font-size: 1.15rem;
    color: #fff;
    font-weight: 400;
}

.login-button button {
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #0187a7;
}

.login-button button a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 1.1rem;
}

.mobile-menu-icon {
    display: none;
}

.mobile-menu {
    display: none;
}

@media screen and (max-width: 730px) {
    .nav-bar {
        padding: 1.5rem 4rem;
    }
    .nav-item {
        display: none;
    }
    .login-button {
        display: none;
    }
    .mobile-menu-icon {
        display: block;
    }
    .mobile-menu-icon button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .mobile-menu ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 1rem;
    }
    .mobile-menu .nav-item {
        display: block;
        padding-top: 1.2rem;
    }
    .mobile-menu .login-button {
        display: block;
        padding: 1rem 2rem;
    }
    .mobile-menu .login-button button {
        width: 100%;
    }
    .open {
        display: block;
    }
}
</style>
