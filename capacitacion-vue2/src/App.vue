<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-col>
        <div class="text-h5">{{ titulo }}</div>
      </v-col>
      

      <v-spacer></v-spacer>
      <v-col cols="2">
        <v-btn text @click="goHome()">
          Ir a Home
        </v-btn>
      </v-col>
      <v-col cols="2">
        <router-link class="color_blanco" to="/about">Ir a About</router-link>
        <!-- <v-btn text>
          Ir a About
        </v-btn> -->
      </v-col>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
/*
export default {
  name: 'App',

  data: () => ({
    //

  }),
};*/


export default {
  name: 'App',
  data: () => {
    return {
      titulo: "Venta de Computadores",
    };
  },
  methods: {
    goHome(){
      console.log('entra a goHome');
      this.$router.push('/home');
    },
  }

}


</script>
<style>
.color_blanco {
  color: white !important;
}
</style>
