<template>
    <div>
        <hr>
        <h1>Este es MiComponente</h1>
        <h2>{{ subtitle }}</h2>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'MiComponente',
    data(){
        return{
            subtitle: 'Soy un h2 en el componente'
        }
    }
}
</script>