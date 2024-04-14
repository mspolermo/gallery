<template>
  <v-container>
    <v-card class="form-card">
      <v-card-title>Добавить новую фотографию</v-card-title>
      <v-card-text>
        <v-row class="d-flex align-center">
          <v-col cols="12" sm="6">
            <v-text-field v-model="title" label="Название" required/>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="albumId" label="Album ID" required />
          </v-col>
          <v-col cols="12" sm="6">
            <v-file-input v-model="img" label="Выбрать фото" required />
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn @click="addPhoto">Добавить</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      albumId: '',
      img: null
    };
  },
  methods: {
    addPhoto() {
      const reader = new FileReader();
      reader.onload = () => {
        const photo = {
          title: this.title,
          albumId: this.albumId,
          id: Date.now().toString(), // Auto-generate ID based on current time
          url: reader.result
        };
        this.$emit('addPhoto', photo);
      };
      reader.readAsDataURL(this.img);
    }
  }
};
</script>

<style scoped>
.form-card {
  padding: 20px;
}
</style>