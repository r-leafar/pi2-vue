<template>
  <router-view/>
</template>
<script>
import Navbar from './components/Navbar.vue';

export default {
components:{
  Navbar
}
}
</script>

<style>
  
  * {
        margin: 0;
        padding: 0;
    }
      a{
        text-decoration:none;
    }
    /*
     body {
        background-color: #52CFF6;
    }
  
************** */
</style>
