<template>
  <div>
    <form>
      <label>Login:</label>
      <input id="login" type="text" name="login" />
      <label>Senha:</label>
      <input id="senha" type="password" name="senha" />
      <button v-on:click="getLogin">Acessar</button>
    </form>
  </div>
</template>
<script>
export default {
    name:"Login",
    methods: {
      getLogin(evt){
              evt.preventDefault()
              this.$router.push('/pedido')
          
      }
    }
}
</script>
<style scoped>
     form>input {
        display: block;
        height: 40px;
        margin: 0 auto;
        width: 100%;
        font-size:28px;
   
    }

    form>label {
        display: block;
        background-color: #C4C4C4;
        line-height: 45px;
        font-size: 36px;
        text-align: center; 
        
    }

    form>button {
        border: 0px;
        background-color: #4784FB;
        width: 50%;
        height: 40px;
        color: white;
        border-radius: 50%;
        margin: 0 auto;
        font-size: 20px;
        line-height: 31px;        
        display: block;
    }
    div{
        width: 25%;
        margin: 0 auto;
        margin-top: 10%;
    }
</style>