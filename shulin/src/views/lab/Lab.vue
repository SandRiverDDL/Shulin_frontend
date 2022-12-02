<script setup>
import ZhSearch from '@/components/search/ZhSearch.vue';
function output(e) { console.log(Object.entries(e)) }
</script>
<template>
	<ZhSearch @search="output"></ZhSearch>
</template>