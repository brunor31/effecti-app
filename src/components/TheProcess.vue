<template>
    <div class="container-main">
        <div class="titulo">
            <h1>Processos</h1>
            <h2>Consulte os editais e licitações em andamento</h2>
        </div>
        <div class="container" v-for="(bidding, index) in biddings" :key="bidding.id">
            <div class="header">
                <div class="cidade">
                    <p>{{ bidding.orgao }}, {{bidding.uf }}</p>
                </div>
                <div class="lido">
                    <img v-if="readItens.includes(bidding.id)" src="@/assets/eye-show-svgrepo-com.svg" alt="">
                </div>
            </div>
           <div class="informacoes-iniciais">
                <div class="dt-publicacao">
                    <h2>Data da publicação</h2>
                    <p>{{ formatDate(bidding.dataPublicacao) }}</p>
                </div>
                <div class="processo">
                    <h2>Processo</h2>
                    <p>{{ bidding.processo.substring(0,1) }}/{{ bidding.processo.substring(1,5) }}</p>
                </div>
           </div>
           <div class="anexos">
                <a :href="bidding.anexos[0].url" class="link">Baixar Anexos</a>
           </div>
            <div class="descricao">
                <h2>Descrição</h2>
                <p>{{ bidding.objeto }}</p>
            </div>
            <div v-if="!bidding.favorito" class="visualizar" @click="toggleReadMore(index)">
                <p>Ler mais</p>
                <i><img src="@/assets/down-arrow-svgrepo-com.svg" alt=""></i>
            </div>
            <div class="gestao" v-if="bidding.favorito">
                <h2>Unidade Gestora</h2>
                <p>{{ bidding.unidadeGestora }}</p>
            </div>
            <div class="infos" v-if="bidding.favorito">
                <div class="dt-recebimento">
                    <h2>Abertura para propostas</h2>
                    <p>{{ formatDate(bidding.dataInicialProposta) }}</p>
                </div>
                <div class="lotes">
                    <h2>Quantidade de lotes</h2>
                    <p>{{ bidding.itens.length }}</p>
                </div>
            </div>
            <div class="infos-fornecedor" v-if="bidding.favorito">
                <div class="modalidade">
                    <h2>Modalidade</h2>
                    <p>{{ bidding.modalidade }}</p>
                </div>
                <div class="portal">
                    <h2>Portal</h2>
                    <p>{{ bidding.portal }}</p>
                </div>
            </div>
            <div v-if="bidding.favorito" class="ocultar" @click="toggleReadLess(index)">
                <p>Ler menos</p>
                <i><img src="@/assets/up-arrow-svgrepo-com.svg" alt=""></i>
            </div>
        </div>
    </div>
    <div class="footer"></div>
</template>
<script setup lang="ts">
import { useBiddingStore } from '@/stores/bidding';
import type { Bidding } from '@/types/Bidding';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useStorage } from '@vueuse/core'


const biddingStore = useBiddingStore();
const biddings = ref<Bidding[]>([]);
let readMore = ref<Boolean>(true);
let readLess = ref<Boolean>(false);
let readItens = useStorage<number[]>('readItens', []);

onMounted(async () => {
    await biddingStore.requestBiddings();
    biddings.value = biddingStore.getBiddings;
});

const formatDate = (data:string) => {
    const value = new Date(data);
    return value.toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
})};

const toggleReadMore = (index: number) => {
    biddings.value[index].favorito = true;
    readLess.value = !readLess.value;
    if(!readItens.value.includes(biddings.value[index].id)){
        readItens.value.push(biddings.value[index].id);
    }
}

const toggleReadLess = (index: number) => {
    biddings.value[index].favorito = false;
    readMore.value = !readMore.value;
}

</script>
<style scoped>
.container-main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.titulo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2rem 0 2rem 0rem;
    width: 60%;
}
.lido{
    margin-right: 1rem;
}
.lido > img {
    width: 25px;
}
.titulo > h1 {
    font-size: 1.5rem;
    font-weight: 600;
}
.titulo > h2 {
    font-size: 1rem;
    font-weight: 500;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 60%;
    margin: 1rem 0 1rem 0;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.cidade > p {
    padding: 1rem 0 1rem 1rem;
    font-weight: 600;
}
.informacoes-iniciais {
    display: flex;
    flex-direction: row;
    margin: 0 0 1rem 1rem;
    width: 100%;
}
.dt-publicacao {
    width: 40%;
}
.dt-publicacao > h2 {
    font-size: 1rem;
    font-weight: 600;
}
.processo {
    width: 50%;
}
.processo > h2 {
    font-size: 1rem;
    font-weight: 600;
}
.anexos {
    margin: 0 0 1rem 1rem;
}
.anexos > a {
    text-decoration: none;  
}
.descricao {
    margin: 0 1rem 1rem 1rem;
}
.descricao > h2 {
    font-size: 1rem;
    font-weight: 600;
}
.gestao {
    margin: 0 1rem 1rem 1rem;
}
.gestao > h2 {
    font-size: 1rem;
    font-weight: 600;
}
.infos {
    display: flex;
    flex-direction: row;
    margin: 0 1rem 1rem 1rem;
    width: 100%;
}
.dt-recebimento {
    width: 40%
}
.dt-recebimento > h2 {
    font-size: 1rem;
    font-weight: 600;
}
.lotes {
    width: 50%;
}
.lotes > h2 {
    font-size: 1rem;
    font-weight: 600;
}
.infos-fornecedor {
    display: flex;
    flex-direction: row;
    margin: 0 1rem 1rem 1rem;
    width: 100%;
}
.modalidade {
    width: 40%;
}
.modalidade > h2 {
    font-size: 1rem;
    font-weight: 600;
}
.portal {
    width: 50%;
}
.portal > h2 {
    font-size: 1rem;
    font-weight: 600;
}
.footer {
    margin: 4rem 0 4rem 0;
}
.visualizar {
    display: flex;
    flex-direction: row;
    margin: 0 1rem 1rem 1rem;
    cursor: pointer;
}
.visualizar > p {
    font-size: 1rem;
    color: #0000FF;
}
img {
    width: 10px;
    margin-left: 0.5rem;
}
.ocultar {
    display: flex;
    flex-direction: row;
    margin: 0 1rem 1rem 1rem;
    cursor: pointer;
}
.ocultar > p {
    font-size: 1rem;
    color: #0000FF;
}
img {
    width: 10px;
    margin-left: 0.5rem;
}
@media (max-width: 800px) {
    .container,.titulo {
      width: 90%;
    }
  }
</style>