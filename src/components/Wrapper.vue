<template>
  <div class="card">
    <div class="card-header" :class="obtenerFondo()">
      <h1 class="text-white">{{ titulo }}</h1>
    </div>

    <div class="card-body">
      <!-- Averigue que <slot> se usa para pasar componentes/elementos 
              en Vue, como lo son los children en React -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wrapper",
  props: ["titulo", "color"],
  methods: {
    obtenerFondo() {
      return "bg-" + this.color;
    },
  },
};
</script>
