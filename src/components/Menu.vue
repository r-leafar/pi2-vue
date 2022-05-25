<template>
  <nav>
    <button id="btn-pedido">Pedidos</button>
    <button id="btn-historico">Históricos</button>
    <button id="btn-apontamento">Apontamento</button>
  </nav>
</template>
<script>
export default {
    name:"Menu"
}
</script>
<style scoped>
    nav>button{
        width: 18%;
        height: 100px;
        border-radius: 50%;
        border: 0px;
        font-size: 36px;
        color:white;
        font-weight: bold;
        margin-top: 3%;
        margin-bottom: 3%;
        }
    #btn-pedido{
        background-color: #64FB61;
    }
    #btn-historico{
        background-color: #F54AEF;
        margin-left: 5%;
    }

    #btn-apontamento{
        background-color: #FAE318;
        margin-left: 5%;
    }
</style>