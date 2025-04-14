<script setup>
import { onMounted, ref } from 'vue';
import { useFetch, useDebounceFn } from '@vueuse/core';

const floorNumber = 114514
const messages = ref([])
const page = ref(1)
const loading = ref(false)


onMounted(async () => {
    const { isFetching, error, data } = await useFetch(`/api/floors/${floorNumber}/_special?order_by=like&size=10&sort=asc&offset=${(page.value - 1) * 10}`).get().json()
    messages.value.push(... (data.value?.map(item => ({
        content: item.content,
        name: item.anonyname,
    }))?.filter(item => !item.content.includes("![]")) ?? []))
})

async function load() {
    page.value += 1
    const { isFetching, error, data } = await useFetch(`/api/floors/${floorNumber}/_special?order_by=like&size=10&sort=asc&offset=${(page.value - 1) * 10}`).get().json()
    messages.value.push(... (data.value?.map(item => ({
        content: item.content,
        name: item.anonyname,
    }))?.filter(item => !item.content.includes("![]")) ?? []))
    loading.value = false
}

const debouncedLoad = useDebounceFn(load, 200)
const wrappedLoad = () => {
    if (!loading.value) {
        loading.value = true
    }
    debouncedLoad()
}
function goBack() {
    window.history.back()
}
</script>

<template>
    <el-page-header @back="goBack" class="xl:w-2/3 m-auto w-full pl-10 pr-10 mt-2">
        <template #content>
            <span class="text-large font-600 mr-3"> 树洞祝福 </span>
        </template>
        <template #title>
            <span class="text-large font-600 mr-3"> 返回 </span>
        </template>
    </el-page-header>
    <a class="xl:w-2/3 m-auto w-full pl-10 pr-10 block text-center text-blue-500 hover:text-blue-700 font-bold text-lg mt-5"
        :href="`fduhole://navigation/forum-hole?hole-id=${floorNumber}`">点击此处跳转到APP</a>
    <ul v-infinite-scroll="wrappedLoad" class="flex flex-col gap-5 p-10 xl:w-2/3 m-auto w-full">
        <li v-for="message in messages"
            class="flex p-5 shadow-md rounded-md hover:shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-200 cursor-pointer">
            <b>
                {{ message.content }}
            </b>
            <i class="flex-grow text-right">
                by
                {{ message.name }}
            </i>
        </li>
        <li class="mt-[3rem]" v-if="loading" v-loading="true"></li>
    </ul>
</template>