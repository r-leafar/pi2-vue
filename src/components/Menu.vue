<template>
  <nav>
    <div class="container">
      <button id="btn-pedido">Pedidos</button>
      <button id="btn-historico">Históricos</button>
      <button id="btn-apontamento">Apontamento</button>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Menu",
};
</script>
<style scoped>
.container > button {
  width: 18%;
  height: 100px;
  border-radius: 50%;
  border: 0px;
  font-size: 36px;
  color: white;
  font-weight: bold;
  margin-top: 3%;
  margin-bottom: 3%;
}
#btn-pedido {
  background-color: #64fb61;
}
#btn-historico {
  background-color: #f54aef;
  margin-left: 5%;
}

#btn-apontamento {
  background-color: #fae318;
  margin-left: 5%;
}
.container {
  text-align: center;

}
@media only screen and (max-width: 844px) {
  .container > button {
    font-size: 20px;
  }
}
</style>