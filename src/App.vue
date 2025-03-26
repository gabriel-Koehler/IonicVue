<script setup >
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

let router=ref(null);
  onMounted(()=>{
    router.value=useRouter()
    console.log(router);
  })
</script>
<template>
  <IonApp>
    <div class="ion-page">
      <ion-header>
        <ion-toolbar class=" flex">
          <ion-button  class="!bg-red-500" @click="router.push('/teste')" >
            teste
          </ion-button>
          <ion-button  @click="router.push('/')" >
            home
          </ion-button>
          <ion-title>Hello World</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding w-full h-full">
      <IonRouterOutlet >
      </IonRouterOutlet>
    </ion-content>
    <!-- <IonTabBar>
      <IonTabButton>

      </IonTabButton>
    </IonTabBar> -->
  </div>
</IonApp>
</template>

<!-- <ion-tabs>
  <ion-tab tab="home">
    <div id="home-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Listen now</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">Listen now content</div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab tab="radio">
    <div id="radio-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Radio</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">Radio content</div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab tab="library">
    <div id="library-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Library</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">Library content</div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab tab="search">
    <div id="search-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Search</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">Search content</div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="home">
      <ion-icon :icon="playCircle" />
      Listen Now
    </ion-tab-button>
    <ion-tab-button tab="radio">
      <ion-icon :icon="radio" />
      Radio
    </ion-tab-button>
    <ion-tab-button tab="library">
      <ion-icon :icon="library" />
      Library
    </ion-tab-button>
    <ion-tab-button tab="search">
      <ion-icon :icon="search" />
      Search
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs> -->