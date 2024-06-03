<script>
    export default {
        name: 'Header'
    }
</script>

<template>
    <header>
        <nav>
            <ul>
                <li><router-link :to="{name: 'home'}">Home</router-link></li>
                <li><router-link :to="{name: 'about'}">About</router-link></li>
                <li><router-link :to="{name: 'contacts'}">Contacts</router-link></li>
                <li><router-link :to="{name: 'projects'}">Projects</router-link></li>
            </ul>
        </nav>
    </header>
</template>



<style lang="scss" scoped>
header{
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
            li{
            list-style: none;
            padding: 0 20px;
                a{
                    color: white;
                    text-decoration: none;
                    &.active{
                        color: yellow;
                    }
                }
            }
    }
    
}
</style>