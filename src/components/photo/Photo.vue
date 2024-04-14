<template>
  <v-col cols="4">
    <v-card @click="openPhoto" class="photo-card">

      <v-img v-if="Boolean(photo.thumbnailUrl)" :src="photo.thumbnailUrl" class="photo-thumbnail"/>
      <v-img v-else :src="photo.url" class="photo-thumbnail"/>

      <v-card-title class="card-title">{{ truncateTitle(photo.title) }}</v-card-title>
      <v-card-subtitle>Album ID: {{ photo.albumId }}</v-card-subtitle>
      <v-card-actions>
        <v-btn color="primary" text @click.stop="openPhoto">View Details</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(["setCurrentPhoto", "showDialog"]),
    openPhoto() {
      this.setCurrentPhoto(this.photo);
      this.showDialog();
    },
    truncateTitle(title) {
      // Ограничить длину заголовка до определенного количества символов
      const maxLength = 20;
      if (title.length > maxLength) {
        return title.slice(0, maxLength) + '...';
      }
      return title;
    }
  }
}
</script>

<style lang="scss" scoped>
.photo-card {
  height: 300px;
  overflow: hidden;
  margin-bottom: 20px;
}

.card-title {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

.photo-thumbnail {
  height: 200px;
  object-fit: cover;
}
</style>