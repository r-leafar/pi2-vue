<template>
  <Menu/>
  <main>
  </main>
</template>

<script>
import Menu from "../components/Menu.vue";
const dayjs = require("dayjs");

export default {
  name: "Apontamento",
  components: { Menu },
  data() {},
};
</script>

<style scoped>
main{
    height:100vh;
    background-color: rgb(247, 243, 10);
}
</style>
