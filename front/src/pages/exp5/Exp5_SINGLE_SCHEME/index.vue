<template>
    <div>hello world</div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
onMounted(() => {
    console.log("hello world");
});


</script>

<style lang="less" scoped></style>