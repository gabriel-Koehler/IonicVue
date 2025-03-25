<script setup >
import { IonRouterOutlet } from '@ionic/vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

let router;
  onMounted(()=>{
    router=useRouter()
    console.log(router);
  })
  const call=()=>{
    router.push('./teste')
    console.log(router);
  }
</script>
<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-button @click="call()" >
          link
        </ion-button>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <IonRouterOutlet>

      </IonRouterOutlet>
      
      <h1 @click="call()"  >Welcome To @ionic/vue</h1>
    </ion-content>
    
  </div>
</template>
