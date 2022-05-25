<template>
<router-link to="/"><Navbar /></router-link>
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
     body {
        background-color: #52CFF6;
    }
    a{
        text-decoration:none;
    }
</style>
