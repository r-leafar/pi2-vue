<template>
  <Menu/>
 <Pedido/>
  <Footer/>
</template>


<script>
import Menu from "../components/Menu.vue";
import Footer from "../components/Footer.vue";
import Pedido from "../components/Pedido.vue";
export default {
  components:{
    Menu,Footer,Pedido
  }
}
</script>