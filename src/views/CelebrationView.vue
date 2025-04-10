<script setup lang="ts">
const mockMessage = [
    {
        content: "祝蛋挞生日快乐！",
        name: "某旦夕用户",
    }
]

</script>

<template>
    <div class="w-full p-10 h-[64rem] flex flex-col gap-2">
        <div class="w-full h-10 bg-red-500"></div>
        <div class="grid grid-cols-2 grid-rows-3 gap-5 md:grid-cols-3 md:grid-rows-2 w-full flex-grow">
            <div
                class=" md:row-span-2 md:col-span-1 col-span-2 row rounded-xl flex justify-center items-center bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:cursor-pointer">
                one</div>
            <div
                class="bg-gray-100 rounded-xl flex justify-center items-center shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:cursor-pointer">
                two</div>
            <div
                class="bg-gray-100  rounded-xl flex justify-center items-center shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:cursor-pointer">
                three</div>
            <div
                class="bg-gray-100 rounded-xl flex justify-center items-center shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:cursor-pointer">
                four</div>
            <div
                class="bg-gray-100 rounded-xl flex justify-center items-center shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:cursor-pointer">
                five</div>
        </div>
    </div>
</template>

<style module></style>