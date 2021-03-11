<template>
    <img v-for="photo in currentAlbumPhotos" :src="photo.thumbnailUrl"/>
</template>
<script>
export default {
    
}
</script>