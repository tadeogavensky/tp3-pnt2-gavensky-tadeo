<template>
  <Wrapper titulo="Usuarios" color="danger">
    <h2>Usuarios de MockAPI</h2>

    <div v-if="loading" class="d-flex justify-content-center w-100">
      <div class="spinner-border text-danger" role="status"></div>
    </div>
    <div v-else-if="usuarios.length > 0" class="table-responsive">
      <table class="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in usuarios" :key="usuario.id">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.telefono }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="alert alert-warning">No hay usuarios</div>
  </Wrapper>
</template>
<script>
import ServicioUsuario from "../services/ServicioUsuario";
import Wrapper from "./Wrapper.vue";

export default {
  name: "Usuarios",
  components: {
    Wrapper,
  },

  mounted() {
    this.obtenerUsuarios();
  },

  data() {
    return {
      servicioUsuario: new ServicioUsuario(),
      usuarios: [],
      loading: true,
    };
  },
  methods: {
    async obtenerUsuarios() {
      this.usuarios = await this.servicioUsuario.getUsuarios();
      this.loading = false;
    },
  },
};
</script>
<style></style>
