<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Inicio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink
            :to="route.path"
            class="nav-link"
            v-for="(route, index) in routes"
            :key="index"
            >{{ route.label }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import routes from "../router";
export default {
  name: "Navbar",

  data() {
    return {
      routes: [
        { path: "/", label: "Formulario" },
        { path: "/usuarios", label: "Usuarios" },
      ],
    };
  },
};
</script>
<style scoped></style>
