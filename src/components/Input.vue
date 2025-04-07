<template>
  <IonInput
  @ion-change="emit('changeInput', a)"  v-model="value" 
  :label="label"  
  label-placement="floating"
   />

</template>
<script setup>
// import { IonInput } from '@ionic/vue';
import { IonInput, IonLabel } from '@ionic/vue';
import { onMounted, ref } from 'vue';
const props = defineProps(["value","label"])
const emit = defineEmits(["changeInput"])
let value = ref("")
let label = ref("")
onMounted(() => {
  value.value = props.value
  label.value = props.label
})
// perdido  sem sentido
// louco pra sentir algo
// que seja correspontido
// e tenho dito que é dificil ser lido
// faça-se ser entendito
// mas é cansativo demais
// prefiro seguir sem caminho

// na cabeça uns rap
// varios hinos no leque
// varios pra fazer os perregue

</script>
<style scoped>
</style>