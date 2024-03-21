<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    slogan: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})
</script>
        
<template>
    <div class="flex flex-wrap rounded-3xl p-3 bg-gray-50 hover:bg-gray-100">
        <img class="w-11 h-11 m-2 my-auto" :src="icon" :alt="name+': '+slogan">
        <div class="p-1">
            <div class="font-bold">{{name}}</div>
            <div v-if="slogan.length > 0">{{slogan}}</div>
        </div>
    </div>
</template>
        
<style module>

</style>
        