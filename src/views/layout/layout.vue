<template>
     <!-- Start of Navigation -->
     <div class="layout">
    <div class="navigation">
        <div class="container">
            <div class="inside">
                <div class="nav nav-tab menu">
                    <button class="btn"><img class="avatar-xl" src="../../../public/img/avatars/avatar-male-1.jpg" alt="avatar"></button>
                    <a href="#members" data-toggle="tab"><i class="material-icons">account_circle</i></a>
                    <a href="#discussions" data-toggle="tab" class="active"><i class="material-icons active">chat_bubble_outline</i></a>
                    <a href="#notifications" data-toggle="tab" class="f-grow1"><i class="material-icons">notifications_none</i></a>
                    <button class="btn mode"><i class="material-icons">brightness_2</i></button>
                    <a href="#settings" data-toggle="tab"><i class="material-icons">settings</i></a>
                    <router-link class="material-icons btn power" to="/login">power_settings_new</router-link>
                </div>
            </div>
        </div>
</div>
    <sidebar/>
    <router-view/>
     </div>
</template>
<script>
import sidebar from '../sidebar.vue'
export default {
    components:{
        sidebar
    },
    setup() {
        
    },
}
</script>

<style scoped>

</style>