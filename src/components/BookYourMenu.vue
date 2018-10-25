<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <h1 class="font-weight-light primary--text">
        Book your Menu for your reservation at: "{{ restaurant.name }}"
      </h1>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      restaurant: {
        name: 'Le déjeuner dans l\'herbe'
      }
    })
  }
</script>

<style>

</style>
