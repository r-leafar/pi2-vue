<template>
  <router-link to="/">
    <Navbar @toggleCss="toggleCssNot" />
  </router-link>
  <Menu :toggleCss="storeToggle.getValue" />
  <main>
    <div id="secao1">
      <div style="width: 15%; float: left">
        <div class="rTable" style="padding-top: 15px">
          <div class="rTableRow">
            <div class="rTableHead">Data Inicial</div>
          </div>
          <div class="rTableRow">
            <div class="rTableCell">
              <input
                type="date"
                id="start"
                name="trip-start"
                min="2000-01-01"
                max="2023-01-01"
                v-model="data_inicial"
              />
            </div>
          </div>
        </div>
        <div class="rTable" style="margin-top: 15px">
          <div class="rTableRow">
            <div class="rTableHead">Data Final</div>
          </div>
          <div class="rTableRow">
            <div class="rTableCell">
              <input
                type="date"
                id="start"
                name="trip-start"
                min="2000-01-01"
                max="2023-01-01"
                v-model="data_final"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="rTable"
          style="margin-top: 15px; padding-left: 100px; padding-top: 2%"
        >
          <div class="rTableRow">
            <div class="rTableHead">Frota</div>
            <div class="rTableHead">Trem</div>
            <div class="rTableHead">Sistema</div>
          </div>
          <div class="rTableRow">
            <div class="rTableCell">
              <select
                name="frota"
                v-on:change="MontarListaTrem"
                :disabled="frota == ''"
                v-model="frota"
                id="frota"
              >
                <option disabled value="">Selecione</option>
                <option v-for="frota in frotas" :key="frota.id" :value="frota.nome">
                  {{ frota.nome }}
                </option>
              </select>
            </div>
            <div class="rTableCell">
              <select name="trem" :disabled="frota == ''" v-model="trem" id="trem">
                <option disabled value="">Selecione</option>
                <option v-for="trem in trens_filtro" :key="trem.id" :value="trem.nome">
                  {{ trem.nome }}
                </option>
              </select>
            </div>
            <div class="rTableCell">
              <input type="text" id="sistema" v-model="sistema" />
            </div>
          </div>
        </div>
      </div>
      <div id="secao1_3">
        <button id="btn-historico-buscar" v-on:click="buscarHistorico">
          Buscar
        </button>
      </div>
    </div>

    <div id="secao2">
      <div
        class="rTable"
        style="width: 100%; margin-top: 15px; padding-left: 0px; padding-top: 3%"
      >
        <div class="rTableRow">
          <div class="rTableHead">Id</div>
          <div class="rTableHead">Usuario</div>
          <div class="rTableHead">Trem</div>
          <div class="rTableHead">Carro</div>
          <div class="rTableHead">Defeito</div>
          <div class="rTableHead">Reparo</div>
          <div class="rTableHead">Data</div>
          <div class="rTableHead">Observação</div>
        </div>
        <div class="rTableRow" v-for="pedido in lista_pedidos">
          <div class="rTableCell">{{ pedido.id }}</div>
          <div class="rTableCell">{{ pedido.usuario.nome }}</div>
          <div class="rTableCell">{{ pedido.trem }}</div>
          <div class="rTableCell">{{ pedido.carro }}</div>
          <div class="rTableCell">{{ pedido.descricao_falha }}</div>
          <div class="rTableCell">{{ pedido.reparo }}</div>
          <div class="rTableCell">{{ pedido.data }}</div>
          <div class="rTableCell">
            <span v-if="pedido.observacao.length!==0">
              {{ pedido.observacao[pedido.observacao.length-1].descricao }}
            </span>

            <button style="float: right" v-on:click="carregarApontamento(pedido.id)">
              ###
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Menu from "../components/Menu.vue";
import Navbar from "../components/Navbar.vue";
const dayjs = require("dayjs");
import { useMainStore } from "../stores/main";
import { useToggleStore } from "../stores/toggle";

export default {
  name: "Historico",
  components: { Menu, Navbar },
  setup() {
    const store = useMainStore();
    const storeToggle = useToggleStore();

    return {
      // you can return the whole store instance to use it in the template
      store,
      storeToggle,
    };
  },
  data() {
    return {
      frotas: null,
      frota: null,
      trens: null,
      trens_filtro: null,
      trem: null,
      data_inicial: null,
      data_final: null,
      sistema: "",
      lista_pedidos: null,
      css_one: "#F00AC9",
      css_two: "#4784fb",
      css_tree: "#c4c4c4",
      css_four: "black",
    };
  },
  methods: {
    async carregarFrota() {
      const req = await fetch(`${process.env.VUE_APP_API_URL}frotas`);
      const data = await req.json();
      this.frotas = data;
    },
    async getTrens() {
      const req = await fetch(`${process.env.VUE_APP_API_URL}trens`);
      const data = await req.json();
      this.trens = data;
    },
    async MontarListaTrem() {
      if (this.frotas !== null && this.trens !== null) {
        let filtro = [];
        for (var t of this.trens) {
          if (t.frota.nome === this.frota) {
            filtro.push({ id: t.id, nome: t.nome });
          }
        }
        this.trens_filtro = filtro;
        this.trem = null;
      }
    },
    async carregarApontamento(idpedido) {
      this.store.setpedido(idpedido);
      this.$router.push({ name: "apontamento" });
    },
    async buscarHistorico() {
      const data = {
        dtinicial: this.data_inicial,
        dtfinal: this.data_final,
        trem: this.trem,
        descricao_falha: this.sistema,
      };

      let validform = true; /*
      for (const key in data) {
        if (data[key] == null || data[key] == "") {
          validform = false;
          alert("Preencha todos os campos");
          break;
        }
      }*/
      if (validform) {
        let query_api = `pedidos?_embed=observacao&descricao_falha_like=${this.sistema}`;
        query_api += this.trem !== null ? `&trem=${this.trem}` : "";
        query_api += this.data_inicial !== null && this.data_final !== null ? `&data_gte=${this.data_inicial}&data_lte=${this.data_final}`: "";

        const req = await fetch(`${process.env.VUE_APP_API_URL}${query_api}`);
        const data = await req.json();
        this.lista_pedidos = data;
        console.log(query_api);
        console.log(this.lista_pedidos);
      }
    },
    changeCss(ativo) {
      if (ativo) {
        this.css_one = "#F00AC9";
        this.css_two = "#4784fb";
        this.css_tree = "#c4c4c4";
        this.css_four = "black";
      } else {
        this.css_one = "white";
        this.css_two = "black";
        this.css_tree = "black";
        this.css_four = "white";
      }
    },
    toggleCssNot() {
      this.changeCss(!this.storeToggle.getValue);
    },
    toggleCss() {
      this.changeCss(this.storeToggle.getValue);
    },
  },
  mounted() {
    this.carregarFrota();
    this.getTrens();
    this.changeCss(!this.storeToggle.getValue);
  },
};
</script>

<style scoped>
#secao1_3 {
  float: right;
  margin-right: 25%;
}

#secao2 {
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
  background-color: v-bind(css_two);
}

main {
  height: 100vh;
  background-color: v-bind(css_one);
}
#trem {
  width: 50%;
}
#frota {
  width: 50%;
}
#sistema {
  width: 90%;
}
/*Formatação da tabela*/
.rTable {
  display: table;
  width: 90%;
}

.rTableRow {
  display: table-row;
}

.rTableHeading {
  display: table-header-group;
  background-color: v-bind(css_tree);
}

.rTableHead {
  background-color: v-bind(css_tree);
  color: v-bind(css_four);
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
