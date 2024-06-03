<script>
import { store } from '../data/store'
import axios from 'axios'
import Main from '../components/Main.vue'

    export default {
        components:{
            Main
        },
        
        data( ){
            return {
                store,
            }
        },
        methods:{
            getApi(){
                axios.get(store.apiUrl)
                .then(result => {
                    console.log(result.data);
                    this.store.projects = result.data;
                })
                .catch(error => {
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
    <Main />
</template>



<style lang="scss" scoped>

</style>