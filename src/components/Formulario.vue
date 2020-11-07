<template>
  <div>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Form</h2>

        <form class="mid-form" @submit.prevent="mostrarUser">
          <div class="form-group">
            <label for="nombre">Nombre
            <small v-if="submitted && !$v.user.nombre.required">Campo obligatorio</small>
            <small v-if="submitted && !$v.user.nombre.minLength">Minimo 2 caracteres</small>
            </label>
            <input type="text" name="nombre" v-model="user.nombre" />
          </div>

          <div class="form-group">
            <label for="apellidos">Apellidos
            <small v-if="submitted && !$v.user.apellido.required">Campo obligatorio</small>
            <small v-if="submitted && !$v.user.apellido.minLength">Minimo 2 caracteres</small>
            </label>
            <input type="text" name="apellidos" v-model="user.apellido" />
          </div>

          <div class="form-group">
            <label for="bio">Biografia
            <small v-if="submitted && !$v.user.biografia.required">Campo obligatorio</small>
            <small v-if="submitted && !$v.user.biografia.minLength">Minimo 10 caracteres</small>
            </label>
            <textarea name="bio" v-model="user.biografia"></textarea>
          </div>

          <div class="form-group radibuttons">
            <input type="radio" name="genero" value="hombre" v-model="user.genero" /> Hombre
            <input type="radio" name="genero" value="mujer" v-model="user.genero" /> Mujer
            <input type="radio" name="genero" checked value="otro" v-model="user.genero"/> Otro
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import Sidebar from "./Sidebar";
export default {
  name: "Formulario",
  components: {
    Sidebar,
  },
  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2)
      },
      apellido: {
        required,
        minLength: minLength(2)
      },
      biografia: {
        required,
        minLength: minLength(10)
      }
    }
  },
  methods: {
    mostrarUser(){
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        return false
      }
      alert("Datos cargados correctamente!")
    }
  },
  data() {
    return {
      submitted: false,
      user: {
        nombre: '',
        apellido: '',
        biografia: '',
        genero: '',
      }
    }
  }
};
</script>