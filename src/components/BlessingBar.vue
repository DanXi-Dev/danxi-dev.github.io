<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useFetch } from '@vueuse/core';

const floorNumber = 114514

const position = ref(0)

const positionString = computed(() => {
    return `${position.value}%`
})


const { isFetching, error, data } = useFetch(`/api/floors/${floorNumber}/_special?order_by=id&size=100&sort=asc&offset=0`).get().json()

const messages: any = computed(() =>
    data.value?.map(item => ({
        content: item.content,
        name: item.anonyname,
    }))?.filter(item => !item.content.includes("!()")) ?? []
)
const interval = setInterval(() => {
    position.value -= 0.003
    if (position.value > 100) {
        position.value = 0
    }
}, 10)



</script>

<template>
    <div class="bg-gray-100 rounded-xl shadow-inner overflow-hidden p-3 flex ">
        <div class="flex items-center gap-4 flex-nowrap move">
            <div v-for="message in messages">
                <div class="flex text-nowrap">
                    <b>
                        {{ message.content }}
                    </b>
                    <i>
                        by
                        {{ message.name }}
                    </i>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
.move {
    transform: translateX(v-bind(positionString));
}
</style>