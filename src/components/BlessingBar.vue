<script setup lang="ts">
import { computed, ref } from 'vue';
import { useFetch } from '@vueuse/core';

const floorNumber = 444012

const position = ref(0)

const positionString = computed(() => {
    return `${position.value}%`
})

const stop = ref(false)


const { isFetching, error, data } = useFetch(`https://anniversary.fduhole.com/api/floors/${floorNumber}/_special?order_by=like&size=100&sort=asc&offset=0`).get().json()

const messages: any = computed(() =>
    data.value?.map(item => ({
        content: item.content,
        name: item.anonyname,
    }))?.filter(item => !item.content.includes("![]")) ?? []
)
const interval = setInterval(() => {
    if (stop.value) {
        return
    }
    position.value -= 0.003
    if (position.value < -100) {
        position.value = 0
    }
}, 10)

function toHole() {
    window.location.href = "/celebration/hole"
}


</script>

<template>
    <div class="bg-gray-100 rounded-xl shadow-inner overflow-hidden p-3 flex ">
        <div class="flex items-center gap-4 flex-nowrap move" @mouseenter="stop = true" @mouseleave="stop = false"
            @click="toHole">
            <div v-for="message in messages"
                class="flex text-nowrap pl-2 pr-2 p-1 shadow-md rounded-md hover:shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-200 cursor-pointer">
                <b class="max-w-64 text-ellipsis overflow-hidden mr-2 inline-block">
                    {{ message.content }}
                </b>
                <i>
                    by
                    {{ message.name }}
                </i>
            </div>
        </div>


    </div>
</template>

<style scoped>
.move {
    transform: translateX(v-bind(positionString));
}
</style>