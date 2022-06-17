<template>
  <Menu />
  <main>
    <div id="apontamento-secao-1">
      <div
        class="rTable"
        style="width: 100%; margin-top: 15px; padding-left: 0px; padding-top: 0%"
      >
        <div class="rTableRow">
          <div class="rTableHead">Pedido</div>
          <div class="rTableHead">Trem</div>
          <div class="rTableHead">Carro</div>
          <div class="rTableHead">Descricao Falha</div>
          <div class="rTableHead">Data</div>
          <div class="rTableHead">Local</div>
          <div class="rTableHead">P/T</div>
          <div class="rTableHead">IN</div>
          <div class="rTableHead">Status</div>
        </div>
        <div class="rTableRow">
          <div class="rTableCell">Lorem ipsum</div>
          <div class="rTableCell">Lorem ipsum</div>
          <div class="rTableCell">Lorem ipsum</div>
          <div class="rTableCell">Lorem ipsum</div>
          <div class="rTableCell">Lorem ipsum</div>
          <div class="rTableCell">Lorem ipsum</div>
          <div class="rTableCell">Lorem ipsum</div>
          <div class="rTableCell">Lorem ipsum</div>
          <div class="rTableCell">Lorem ipsum</div>
        </div>
      </div>
    </div>
    <div id="apontamento-secao-2">
      <div class="rTable">
        <div class="rTableRow">
          <div class="rTableHead">Carro</div>
          <div class="rTableHead">Equipamento</div>
          <div class="rTableHead">Defeito</div>
          <div class="rTableHead">Reparo</div>
          <div class="rTableHead">Data</div>
        </div>
        <div class="rTableRow">
          <div class="rTableCell">Lorem ipsum</div>
          <div class="rTableCell">Lorem ipsum</div>
          <div class="rTableCell">Lorem ipsum</div>
          <div class="rTableCell">Lorem ipsum</div>
          <div class="rTableCell">Lorem ipsum</div>
        </div>
      </div>
      <button id="btn-apontamento-atualizar" v-on:click="">Atualizar</button>
    </div>
    <div id="apontamento-secao-3">
      <div class="rTable">
        <div class="rTableRow">
          <div class="rTableHead">Observação</div>
        </div>
        <div class="rTableRow">
          <div class="rTableCell">Lorem ipsum</div>
        </div>
      </div>
    </div>
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
#btn-apontamento-atualizar {
  font-size: 25px;
  text-shadow: 1px 1px 2px black;
  font-family: sans;
  border: 0px;
  width: 150px;
  border-radius: 100%;
  height: 90px;
  color: #fff;
  background-color: #4784fb;
  margin: 4% 6%;
}
main {
  height: 100vh;
  background-color: rgb(247, 243, 10);
}
#apontamento-secao-2 > div.rTable {
  width: 75%;
  padding-top: 5%;
  float: left;
}
#apontamento-secao-3 > div.rTable {
  width: 75%;
  padding-top: 5%;
  float: left;
}
/*Formatação da tabela*/
.rTable {
  display: table;
  width: 100%;
}
.rTableRow {
  display: table-row;
}
.rTableHeading {
  display: table-header-group;
  background-color: #c4c4c4;
}
.rTableHead {
  background-color: #c4c4c4;
  font-weight: bold;
  text-transform: uppercase;
}
.rTableCell,
.rTableHead {
  display: table-cell;
  padding: 3px 10px;
}
.rTableCell {
  background-color: white;
}
.rTableHeading {
  display: table-header-group;
  background-color: #c4c4c4;
  font-weight: bold;
}
.rTableFoot {
  display: table-footer-group;
  font-weight: bold;
  background-color: #ddd;
}
.rTableBody {
  display: table-row-group;
}
</style>
