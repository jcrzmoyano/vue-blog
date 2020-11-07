<template>
  <div>
    <Slider texto="Pagina de pruebas" />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Test page</h2>
        <p>{{ id_url }}</p>
        <button @click="saludar()">Say {{this.saludoB}}!</button>
        <h2>{{ saludo }}</h2>
        <hr />
        <input type="text" placeholder="Ingrese su nombre" v-model="nombre" />
        <p>
          Hi <b>{{ nombre }}</b
          >, how are you?
        </p>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";
import Sidebar from "./Sidebar";
export default {
  name: "Pagina",

  components: {
    Slider,
    Sidebar,
  },

  // Vue hooks (created, mounted, updated & destroyed)
  created() {
    console.log("Componente creado!");
  },
  mounted() {
    this.id_url = this.$route.params.id;
    console.log("Componente montado!");
  },
  updated() {
    console.log("Componente actualizado!");
    console.log(this.saludo);
  },
  destroyed() {
    console.log("Componente eliminado!");
  },
  // end hooks

  data() {
    return {
      id_url: null,
      saludo: "Hello!",
      nombre: "",
      saludoB: "Goodbye"
    };
  },
  methods: {
    saludar() {
      if (this.saludo === "Hello!") {
        this.saludo = "Goodbye!";
        this.saludoB = "Hello!";
      } else {
        this.saludo = "Hello!";
        this.saludoB = "Goodbye!";
      }
    },
  },
};
</script>