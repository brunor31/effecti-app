<template>
  <div class="container-header">
    <div class="infos">
      <h1>Eficiência em compras do setor público</h1>
      <p>A plataforma que transforma o dia a dia dos licitantes através de avisos de editais, 
        cadastro de propostas, robô de lances e monitoramento de chat!</p>
    </div>
    <div class="logo">
      <img src="@/assets/business-analytics-bro.svg" alt="Logo" />
    </div>
  </div>
  <div class="container-status">
    <div class="editais">
      <h1>+ 450mil</h1>
      <p>Editais encontrados</p>
    </div>
    <div class="mensagens">
      <h1>+ 180mil</h1>
      <p>Mensagens monitoradas por dia</p>
    </div>
    <div class="propostas">
      <h1>+ 230mil</h1>
      <p>Propostas enviadas</p>
    </div>
    <div class="itens">
      <h1>+ 3milhões</h1>
      <p>Itens vendidos</p>
    </div>
  </div>
  <div class="container-footer">
    <div class="performance">
      <h1>+ Performance</h1>
      <p>Encontre as melhores oportunidades para o seu negócio</p>
    </div>
    <div class="praticidade">
      <h1>+ Praticidade</h1>
      <p>Cadastre as suas propostas com facilidade e agilidade</p>
    </div>
    <div class="otimizacao">
      <h1>+ Otimização</h1>
      <p>Dispute vários pregões ao mesmo tempo, de maneira segura e inteligente</p>
    </div>
    <div class="seguranca">
      <h1>+ Segurança</h1>
      <p>Monitore o chat do pregão e não perca nenhuma convocação</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container-header {
  display: flex;
  background-color: #2f2841;
  width: 100%;
}
.infos{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10rem;
}
.infos h1 {
  color: #fff;
  font-size: 2rem;
}
.infos p {
  color: #fff;
  font-size: 1rem;
  width: 75%;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.logo img {
  width: 450px;
}

.container-status {
  display: flex;
  justify-content: space-around;
  background-color: #f2f2f2;
  width: 100%;
  padding: 2rem 0 2rem 0;
}
.editais, .mensagens, .propostas, .itens {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-footer {
  display: flex;
  justify-content: space-around;
  padding: 2rem 0 2rem 0;
}

.performance, .praticidade, .otimizacao, .seguranca {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #403f41;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  width: 20%;
}



@media (max-width: 800px) {
  .container-header {
    flex-direction: column;
    align-items: center;
  }
  .infos {
    margin: 1rem 0 1rem 0;
    text-align: center;
  }
  .infos h1 {
    margin: 1rem 0 1rem 0;
  }
  .infos p {
    width: 100%;
  }
  .container-status {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .container-footer {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .performance, .praticidade, .otimizacao, .seguranca {
    width: 80%;
  }
}

</style>
  