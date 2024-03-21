<template>
    <div class="px-16 py-7">
        <div class="xl:w-4/5 xl:m-auto">
            <slot />
        </div>
    </div>
</template>

<style module>
h2 {
    @apply text-4xl font-bold my-5;
    /* font-size: 2.25rem; */
    /* line-height: 2.5rem; */
    /* font-weight: 700; */
    /* margin-top: 1.25rem; */
    /* margin-bottom: 1.25rem; */
}

p {
    @apply text-lg;
    /* font-size: 1.5rem;
    line-height: 2rem; */
}
</style>
