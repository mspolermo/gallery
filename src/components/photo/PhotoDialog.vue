<template>
  <v-dialog
      v-model="dialogVisible"
      max-width="600"
      @click:outside="hideDialog"
  >
    <v-card>
      <v-card-title>{{ fullTitle }}</v-card-title>
      <v-card-text>
        <v-img :src="currentPhotoUrl" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    dialogVisible: {
      get() {
        return this.$store.getters.getDialogVisible;
      },
      set(value) {
        if (!value) {
          this.hideDialog();
        }
      }
    },
    fullTitle() {
      return `Название фотографии - ${this.currentPhoto.title}`;
    },
    currentPhoto() {
      return this.$store.getters.getCurrentPhoto;
    },
    currentPhotoUrl() {
      return this.currentPhoto ? this.currentPhoto.url : '';
    }
  },
  methods: {
    hideDialog() {
      this.$store.commit('hideDialog');
    }
  }
};
</script>

<style scoped>

</style>