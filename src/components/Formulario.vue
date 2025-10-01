<template>
  <Wrapper titulo="Mis tareas" color="primary">
    <form>
      <h2>Regístrate</h2>
      <div class="form-group my-4">
        <label for="inputNombre">Nombre</label>
        <input
          id="inputNombre"
          type="text"
          class="form-control"
          placeholder="Tadeo Gavensky"
          @input="(event) => (nombreDirty = true)"
          v-model="nombre"
        />
        <div
          v-show="nombreDirty && !validarNombre"
          class="alert alert-warning mt-2"
        >
          El nombre debe tener entre 5 y 15 caracteres
        </div>
      </div>
      <div class="form-group my-4">
        <label for="inputEmail">Email</label>
        <input
          id="inputEmail"
          type="email"
          class="form-control"
          placeholder="tadeo@gmail.com"
          @input="(event) => (emailDirty = true)"
          v-model="email"
        />
        <div
          v-show="emailDirty && !validarEmail"
          class="alert alert-warning mt-2"
        >
          El email debe ser válido
        </div>
      </div>
      <div class="form-group my-4">
        <label for="inputEdad">Edad</label>
        <input
          id="inputEdad"
          type="text"
          class="form-control"
          placeholder="23"
          @input="(event) => (edadDirty = true)"
          v-model="edad"
        />
        <div
          v-show="edadDirty && !validarEdad"
          class="alert alert-warning mt-2"
        >
          La edad debe ser entre 18 y 120 años
        </div>
      </div>
    </form>

    <div class="table-responsive">
      <h2>Tus datos</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p v-show="validarNombre">{{ nombre }}</p>
            </td>
            <td>
              <p v-show="validarEmail">{{ email }}</p>
            </td>
            <td>
              <p v-show="validarEdad">{{ edad }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from "./Wrapper.vue";

export default {
  name: "Formulario",
  components: {
    Wrapper,
  },

  data() {
    return {
      nombre: "",
      email: "",
      edad: "",
      nombreDirty: false,
      emailDirty: false,
      edadDirty: false,

      regexEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    };
  },
  computed: {
    validarNombre() {
      return this.nombre.length >= 5 && this.nombre.length <= 15;
    },
    validarEdad() {
      console.log(Number(this.edad) >= 18 && Number(this.edad) <= 120);
      return Number(this.edad) >= 18 && Number(this.edad) <= 120;
    },
    validarEmail() {
      return this.email.toLowerCase().match(this.regexEmail);
    },
  },
};
</script>
