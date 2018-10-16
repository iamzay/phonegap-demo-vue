<template>
  <div>
    <div>
      <button class="photo-button" @click="onPhotoClick">拍照</button>
      <button class="album-button" @click="onAlbumClick">相册</button>
    </div> 
    <ul class="image-list">
      <li v-for="imageUrl in imageUrls" :key="imageUrl" class="image-item">
        <img :src="imageUrl">
      </li> 
    </ul> 
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'camera',
  data () {
    return {
      imageUrls: [],
    }
  },
  methods: {
    getPicture (sourceType) {
      navigator.camera.getPicture(
        imageUrl => {
          this.imageUrls.push(imageUrl)
        },
        message => {
          alert('Failed because: ' + message)
        },
        {
          destinationType: Camera.DestinationType.FILE_URL,
          sourceType: sourceType,
        }
      )
    },
    onPhotoClick () {
      this.getPicture(Camera.PictureSourceType.CAMERA) 
    },
    onAlbumClick () {
      this.getPicture(Camera.PictureSourceType.PHOTOLIBRARY)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 300px;
}
</style>
