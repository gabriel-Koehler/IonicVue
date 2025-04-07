<template>
  <IonPage  class="
  overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
  ">
    <IonContent >
      <div class="h-full">
        <div class="">adsadasd</div>
        page teste testando
      </div>

    </IonContent>
    <div class="w-28">
      <Metas cash-economize="123" meta-name="casa" />
    </div>
    <div class="w-64 m-4">
      <Input label="ahaamm" @change-input="(a)=>{ console.log(a)}" :value="one" />
    </div>
    <HeroObjective> </HeroObjective>
  </IonPage>
</template>
<style lang="css" scoped>
</style>
<script setup>
import HeroObjective from '@/components/HeroObjective.vue';
import Input from '@/components/Input.vue';
import Metas from '@/components/Metas.vue';
import { IonContent, IonPage } from '@ionic/vue';

  let one ="a";
</script>