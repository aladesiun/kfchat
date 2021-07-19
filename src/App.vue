<template>
  <router-view/>
</template>
<script>
import {useRouter, useRoute} from 'vue-router'
import { onBeforeMount } from 'vue'
// import {onBeforeMount} from 'vue'
import firebase from 'firebase'
export default {
  setup(){
    const router = useRouter();
    const route =useRoute();
    onBeforeMount(()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        if(!user){
          router.replace('/signup');
        }else if(route.path == "/login" || route.path == "/signup"){
            router.replace('/');
          }
        
      });
    });
  },
}
</script>


<style>

</style>
