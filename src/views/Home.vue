<template>
    <div id="app">
        <h1> Staff Directory </h1>
        <ul class="list-inline">
            <li v-show="true" class="list-inline-item"> <router-link to="login"> Login </router-link></li>
            <li class="list-inline-item"> <router-link to="/add"> Ajouter un contacte </router-link> </li>
            <li class="list-inline-item"> <router-link to="/edit"> Modifier un contacte </router-link> </li>
            <li class="list-inline-item"> <router-link :to="{ path: '/Update'}" > Update </router-link> </li>
        </ul>

        <StaffDirectory filterKey=""/>
    </div>
</template>

<script>

import StaffDirectory from "../components/StaffDirectory.vue"

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name : "HomePage",
    components: {
        StaffDirectory
    }
}
</script> 


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>