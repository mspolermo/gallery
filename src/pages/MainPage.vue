<template>
  <div class="main-page">
    <v-container>
      <h1>Добро пожаловать в галерею </h1>
      <p>Исследуйте коллекцию изображений с JSON-Placeholder с возможностью добавить частичку себя...</p>
      <router-link to="/photo">
        <v-btn color="primary">Смотреть</v-btn>
      </router-link>
      
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
};
</script>

<style scoped>
.main-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>