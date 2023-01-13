<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h4">Productos</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="Numero 1" v-model="numero1" outlined></v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="Numero 2" v-model="numero2"  outlined></v-text-field>
      </v-col>
      <v-col>
        <div>{{ resultado }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="changeAsJson(false)"> Mostrar como tabla </v-btn>
      </v-col>
      <v-col>
        <v-btn
          @click="
            () => {
              AsJson = true;
            }
          "
        >
          Mostrar como JSON
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="!AsJson">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="productos"
          :items-per-page="5"
          class="elevation-1"
        >
        </v-data-table>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <div v-for="item in productos" :key="item.id_producto">
          {{ JSON.stringify(item) }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import backend from "../services/apiGenerator";

export default {
  name: "ProductosView",
  data: () => {
    return {
      productos: [],
      headers: [
        {
          text: "Código",
          align: "start",
          sortable: false,
          value: "id_producto",
        },
        {
          text: "Nombre",
          value: "nombre_producto",
        },
        {
          text: "Valor",
          value: "valor_unitario",
        },
        {
          text: "Cantidad",
          value: "cantidad",
        },
        {
          text: "Acciones",
          value: "actions",
        },
      ],
      AsJson: false,
      numero1: null,
      numero2: null,
    };
  },
  mounted() {
    console.log("Se montó ProductosView");
    this.getProductos();
  },
  methods: {
    async getProductos() {
      let data = await backend.get("productos/listProductos");
      this.productos = data.data;
    },
    changeAsJson(value) {
      this.AsJson = value;
    },
  },
  computed: {
    resultado(){
        return parseInt(this.numero1) + parseInt(this.numero2);
    }
  },
  watch: {
    numero1: {
      handler(newValue, oldValue) {
        // Note: `newValue` will be equal to `oldValue` here
        // on nested mutations as long as the object itself
        // hasn't been replaced.
        console.log("Valor anterior:", oldValue);
        console.log("Valor nuevo:", newValue);
      },
      deep: true
    }
  }
};
</script>
