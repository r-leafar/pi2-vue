<template>
  <Menu />
  <main>
    <div id="secao1">
      <div style="width: 15%;float:left;">
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
        <div class="rTable" style="width: 25%; margin-top: 15px;padding-left:100px;padding-top:2%">
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
    </div>

    <div id="secao2"></div>
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
main {
  height: 100vh;
  background-color: rgb(240, 10, 201);
}
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
