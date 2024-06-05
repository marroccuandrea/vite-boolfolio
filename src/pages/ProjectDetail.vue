<script>
import axios from 'axios'
import { store } from '../data/store'
import Loader from '../components/partials/Loader.vue'
    export default {
        name: 'projectDetail',
        components:{
            Loader
        },
        data(){
            return{
                loading: true,
                project: {},
                
            }
        },
        methods:{
            getApi(){
                const slug = this.$route.params.slug;
                axios.get(store.apiUrl + 'project-by-slug/' + slug)
                .then(result => {
                    this.loading = false
                    this.project = result.data.project
                    console.log(result.data.project);
                })
                .catch(error => {
                    this.loading = false
                    console.log(error.message);
                })
            }
        },
        computed:{
            // tecnology(){
            //     if(!this.project.tecnology){
            //         return 'Nessun linguaggio'
            //     }
            //     return this.project.tecnology.title;
            // },
            type(){
                if(!this.project.type){
                    return 'Nessun tipo'
                }
                return this.project.type.title;
            },
        },
        mounted(){
            this.getApi()
        }
    }
</script>

<template>
    <div>
        <Loader v-if="loading" />
        <div v-else class="box">
        <h1>{{ project.title }}</h1>
        <span v-for="tecnology in project.tecnologies" class="badge text-bg-warning mx-2 mb-4">{{ tecnology.title }}</span>
        <span class="badge text-bg-success mx-2">{{ type }}</span>
        
        <img class="img-fluid" :src="project.image" >
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ut debitis, dicta quis quaerat nulla ea aliquam soluta maxime rem ratione maiores esse accusantium magni totam pariatur inventore voluptatum incidunt.
        </p>
    </div>
    </div>
</template>



<style lang="scss" scoped>
.box{
    margin: 80px auto;
    max-width: 40rem;
}
</style>