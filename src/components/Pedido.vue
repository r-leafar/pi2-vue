<template>
  <main>
    <div id="secao-superior">
      <div style="display: inline-block">
        <table>
          <tr>
            <th style="width: 10%">PEDIDO</th>
            <th style="width: 20%">TREM</th>
            <th style="width: 20%">CARRO</th>
            <th style="width: 25%">DESCRICAO DA FALHA</th>
            <th style="width: 10%">P/T</th>
            <th style="width: 10%">IN</th>
            <th>LOCAL</th>
          </tr>
          <tr>
            <td>sasas</td>
            <td>sasas</td>
            <td>sasas</td>
            <td>sasas</td>
            <td>sasas</td>
            <td>sasas</td>
            <td>sasas</td>
          </tr>
        </table>
      </div>
      <button id="btn-gerar-pedido">Gerar Pedido</button>
    </div>
  </main>
</template>
<script>
export default {
  name: "Pedido",
};
</script>

<style scoped>
main {
  background-color: #64fb61;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tr:first-child {
  background-color: #c4c4c4;
}

tr:nth-child(2) {
  background-color: #ffffff;
}
#btn-gerar-pedido {
  border: 0px;
  margin-left:13%;
  width: 10%;
  border-radius: 50%;
  height: 100px;
  background-color: #4784fb;
}
#secao-superior {
  width: 100%;
}
</style>
