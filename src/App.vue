<template>
	<Navbar v-if="!$route.meta.hideNavbar"/>
 	<router-view/>
</template>

<script>
// Import Component
import Navbar from '@/components/Navbar'

export default {
	components: { Navbar }
}
</script>

<style>

</style>
