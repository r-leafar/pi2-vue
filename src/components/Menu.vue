<template>
  <nav class="container">
    <div id="conteudo1" v-on:click="$emit('LimparFormPedido')"><div class="pedidos">Pedidos</div></div>
    <div id="conteudo2"><div class="historicos">Históricos</div></div>
    <div id="conteudo3">
      <div class="apontamentos">Apontamentos</div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Menu",
  emits:["limparFormPedido"]
   
};
</script>
<style scoped>
.container {
  display: grid;
  text-shadow: 1px 1px 2px black;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row: 2fr 1fr 1fr;
  grid-template-areas:
    "conteudo1 conteudo2 conteudo3"
    "conteudo4 conteudo4 conteudo4";
  position: relative;
}
.pedidos {
  width: 200px;
  height: 150px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  background-color: rgb(23, 206, 17);
  border-radius: 50%;
  margin: 0 auto 0 auto;
  margin-block: 20px;

  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
}
.historicos {
  width: 200px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  height: 150px;
  background-color: rgb(240, 10, 201);
  border-radius: 50%;
  margin: 0 auto 0 auto;
  margin-block: 20px;
  display: -webkit-flex;

  display: -ms-flexbox;
  display: flex;

  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  justify-content: center;
}
.apontamentos {
  width: 200px;
  height: 150px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  background-color: rgb(247, 243, 10);
  border-radius: 50%;
  margin: 0 auto 0 auto;
  margin-block: 20px;
  display: -webkit-flex;

  display: -ms-flexbox;
  display: flex;

  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  justify-content: center;
}
</style>
