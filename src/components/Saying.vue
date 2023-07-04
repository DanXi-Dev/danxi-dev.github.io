<script setup>
const props = defineProps(['name', 'content'])
</script>

<template>
    <div class="relative saying h-full mb-7">
        <div>
            {{ props.content }}
        </div>
        <br />
        <div class="absolute right-0 bottom-0 font-bold">
            {{ props.name }}
        </div>
    </div>
</template>

<style scoped>
.saying::before {
    content: '“';
    font-size: 6rem;
    position: absolute;
    opacity: 0.3;
    transform: translate(-100%, 75%);

}
</style>
