<template>
  <Menu />
  <main>
    <div id="secao1">
      <div style="width: 15%; float: left">
        <div class="rTable" style="padding-top: 15px">
          <div class="rTableRow">
            <div class="rTableHead">Data Inicial</div>
          </div>
          <div class="rTableRow">
            <div class="rTableCell">15/06/2022</div>
          </div>
        </div>
        <div class="rTable" style="margin-top: 15px">
          <div class="rTableRow">
            <div class="rTableHead">Data Final</div>
          </div>
          <div class="rTableRow">
            <div class="rTableCell">16/06/2022</div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="rTable"
          style="width: 25%; margin-top: 15px; padding-left: 100px; padding-top: 2%"
        >
          <div class="rTableRow">
            <div class="rTableHead">Frota</div>
            <div class="rTableHead">Trem</div>
            <div class="rTableHead">Sistema</div>
          </div>
          <div class="rTableRow">
            <div class="rTableCell">Lorem ipsum</div>
            <div class="rTableCell">Lorem ipsum</div>
            <div class="rTableCell">Lorem ipsum</div>
          </div>
        </div>
      </div>
      <div id="secao1_3">
        <button id="btn-historico-buscar" v-on:click="">Buscar</button>
      </div>
    </div>

    <div id="secao2">
    <div
          class="rTable"
          style="width: 100%; margin-top: 15px; padding-left: 0px; padding-top: 3%"
        >
          <div class="rTableRow">
            <div class="rTableHead">Usuario</div>
            <div class="rTableHead">Trem</div>
            <div class="rTableHead">Carro</div>
            <div class="rTableHead">Equipamento</div>
            <div class="rTableHead">Defeito</div>
            <div class="rTableHead">Reparo</div>
            <div class="rTableHead">Data</div>
            <div class="rTableHead">Observação</div>
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
          </div>
        </div>
    
    </div>
  </main>
</template>

<script>
import Menu from "../components/Menu.vue";
const dayjs = require("dayjs");

export default {
  name: "Historico",
  components: { Menu },
  data() {},
};
</script>

<style scoped>
#secao1_3 {
  float: right;
  margin-right: 25%;
}
#secao2{
}
#btn-historico-buscar {
  font-size: 25px;
  text-shadow: 1px 1px 2px black;
  font-family: sans;
  border: 0px;
  width: 150px;
  border-radius: 100%;
  height: 90px;
  color: #fff;
  background-color: #4784fb;
}

main {
  height: 100vh;
  background-color: rgb(240, 10, 201);
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
