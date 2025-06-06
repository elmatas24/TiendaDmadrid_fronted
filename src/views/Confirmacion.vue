<template>
  <div class="confirmacion">
    <h2>✅ Solicitud enviada correctamente</h2>
    <p><strong>Nombre:</strong> {{ datos.nombre }}</p>
    <p><strong>Teléfono:</strong> {{ datos.telefono }}</p>
    <p><strong>Matrícula:</strong> {{ datos.matricula }}</p>
    <p><strong>Marca y modelo:</strong> {{ datos.marca_modelo }}</p>
    <p><strong>Dirección:</strong> {{ datos.direccion }}</p>
    <p><strong>Código postal:</strong> {{ datos.codigo_postal }}</p>
    <p v-if="datos.observaciones"><strong>Observaciones:</strong> {{ datos.observaciones }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const datos = route.query
</script>

<style scoped>
.confirmacion {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 2px solid #4caf50;
  border-radius: 12px;
  background-color: #f0fff4;
}
</style>
