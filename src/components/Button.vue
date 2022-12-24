<template>

    <router-link to="/addtasks">
        <button @click="onClick()" :style="{background: color}" class="btn">{{ text }}</button>
    </router-link>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String
    },
    methods: {
        onClick(){
           this.$emit('btn-click')
        }
    }
}
</script>
