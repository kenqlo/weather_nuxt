<script setup lang="ts">
const error = useError()
</script>

<template>
	<section>
		<h2>404</h2>
        <p>Page Not Found</p>
        <NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink>
	</section>
</template>
