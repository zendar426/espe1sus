<template>
  <div>
    <h1> {{ titulo }}</h1>
    <button @click="incrementar">Incrementar</button>
    <p>Contador: {{ contador }}</p>
  </div>
  <Mensaje/>
  <Vif/>
  <Vshow/>
  <Vfor></Vfor>
  <Vbind/>
  <Von></Von>
  <Vmodel/>
  <hijo></hijo>
  <padre/>
  <Cpadre/>
  

</template>

<script setup>

import { ref } from 'vue'
import Mensaje from './Mensaje.vue';
import Vif from './Vif.vue';
import Vshow from './Vshow.vue';
import Vfor from './Vfor.vue';
import Vbind from './Vbind.vue';
import Von from './Von.vue';
import Vmodel from './Vmodel.vue';
import Cpadre from './ComponentePadre.vue';
import hijo from './Padre.vue'
import padre  from './Hijo.vue'

const titulo = 'Componente con script setup ඞ'
const contador = ref(0)

function incrementar() {
  contador.value++
}
</script>

<style scoped>


p {
  color: rgb(25, 152, 25);
}
</style>