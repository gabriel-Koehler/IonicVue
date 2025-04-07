<template>
    <div class="w-full flex items-center justify-evenly h-7">
      <div>
        {{props.metaName}}
      </div> 
      <div>
        {{props.cashEconomize}}
      </div>
    </div>

</template>
<script setup>
  import { IonContent } from '@ionic/vue';
  const props=defineProps(["cashEconomize","metaName"])
</script>
<style scoped>

</style>