<script>
import { store } from '../data/store'
import axios from 'axios'
import Main from '../components/Main.vue'
import Loader from '../components/partials/Loader.vue'

    export default {
        components:{
            Main,
            Loader
        },
        
        data( ){
            return {
                store,
                loading: true
            }
        },
        methods:{
            getApi(){
                this.loading = true
                axios.get(store.apiUrl)
                .then(result => {
                    this.loading = false
                    console.log(result.data);
                    this.store.projects = result.data;
                })
                .catch(error => {
                    this.loading = false
                    console.log(error.message);
                })
            }
        },
        mounted(){
            this.getApi();
        },
        name: 'Projects',
    }
</script>

<template>
    <Main v-if="!loading" />
    <Loader v-else />
</template>



<style lang="scss" scoped>

</style>