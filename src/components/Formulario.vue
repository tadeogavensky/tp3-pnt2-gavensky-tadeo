<template>
  <Wrapper titulo="Mis tareas" color="primary">
    <form>
      <div class="form-group my-4">
        <label for="inputNombre">Nombre</label>
        <input
          id="inputNombre"
          type="text"
          class="form-control"
          placeholder="Tadeo Gavensky"
          v-model="nombre"
        />
      </div>
      <div class="form-group my-4">
        <label for="inputEmail">Email</label>
        <input
          id="inputEmail"
          type="email"
          class="form-control"
          placeholder="tadeo@gmail.com"
          v-model="email"
        />
      </div>
      <div class="form-group my-4">
        <label for="inputEdad">Edad</label>
        <input
          id="inputEdad"
          type="text"
          class="form-control"
          placeholder="23"
          v-model="edad"
        />
      </div>
    </form>

    <div class="table-responsive">
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
            <td>{{ nombre }}</td>
            <td>{{ email }}</td>
            <td>{{ edad }}</td>
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
      regexEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    };
  },

  computed: {
    validarNombre() {
      return this.nombre.length >= 5 && this.nombre.length <= 15;
    },
    validarEdad() {
      return Number(this.edad) >= 18 && Number(this.edad) <= 120;
    },
    validarEmail() {
      return this.email.toLowerCase().match(this.regexEmail);
    },
  },
};
</script>
