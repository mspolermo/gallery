<template>
  <v-container>
    <PhotoForm @addPhoto="addPhoto"/>
    <v-row>
      <Photo
          v-for="photo in getAllPhotos"
          :key="photo.id"
          :photo="photo"
      />
    </v-row>
    <PhotoDialog/>
  </v-container>
</template>

<script>
import Photo from "@/components/photo/Photo.vue";
import PhotoForm from "@/components/photo/PhotoForm.vue";
import PhotoDialog from "@/components/photo/PhotoDialog.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { PhotoDialog, Photo, PhotoForm },
  computed: {
    ...mapGetters(["getAllPhotos"]),
  },
  mounted() {
    this.fetchPhotos()
  },
  methods: {
    ...mapActions(["fetchPhotos", "addPhoto"])
  }
}
</script>

<style lang="scss" scoped>
</style>