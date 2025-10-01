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
          v-if="nombreDirty && !validarNombre.ok"
          class="alert alert-warning mt-2"
        >
          {{ validarNombre.mensaje }}
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
          v-if="emailDirty && !validarEmail.ok"
          class="alert alert-warning mt-2"
        >
          {{ validarEmail.mensaje }}
        </div>
      </div>
      <div class="form-group my-4">
        <label for="inputEdad">Edad</label>
        <input
          id="inputEdad"
          type="number"
          class="form-control"
          placeholder="23"
          @input="(event) => (edadDirty = true)"
          v-model="edad"
        />
        <div
          v-if="edadDirty && !validarEdad.ok"
          class="alert alert-warning mt-2"
        >
          {{ validarEdad.mensaje }}
        </div>
      </div>
    </form>

    <h2>Tus datos</h2>
    <div class="table-responsive">
      <table class="table table-hover table-bordered">
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
              <p v-if="validarNombre.ok" class="mb-0">{{ nombre }}</p>
            </td>
            <td>
              <p v-if="validarEmail.ok" class="mb-0">{{ email }}</p>
            </td>
            <td>
              <p v-if="validarEdad.ok" class="mb-0">{{ edad }}</p>
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
      const res = {
        ok: true,
        mensaje: "",
      };
      if (this.nombre.length == 0) {
        res.mensaje = "Campo requerido";
        res.ok = false;
      } else if (this.nombre.length < 5 || this.nombre.length > 15) {
        res.mensaje = "El nombre debe tener entre 5 y 15 caracteres";
        res.ok = false;
      }

      return res;
    },
    validarEdad() {
      const res = {
        ok: true,
        mensaje: "",
      };
      if (!this.edad) {
        res.mensaje = "Campo requerido";
        res.ok = false;
      } else if (this.edad < 18 || this.edad > 120) {
        res.mensaje = "La edad debe ser entre 18 y 120 años";
        res.ok = false;
      }

      return res;
    },
    validarEmail() {
      const res = {
        ok: true,
        mensaje: "",
      };
      if (this.email.length == 0) {
        res.mensaje = "Campo requerido";
        res.ok = false;
      } else if (!this.regexEmail.test(this.email)) {
        res.mensaje = "El email debe ser válido";
        res.ok = false;
      }

      return res;
    },
  },
};
</script>
