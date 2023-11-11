<!-- DetailMovie.vue -->
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ getTitle }}</div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 50vh max-width: 40vh" class="scroll">
        <q-input
          filled
          v-model="selectedMovie.title"
          label="Title"
          :dense="dense"
          @input="emitMoviesEvent"
        />
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" @click="$emit('close')" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

defineProps([
  'getTitle',
  'dense',
  'selectedMovie',
]);

const { emit } = defineEmits();
const emitMoviesEvent = () => {
  const newMovie = {
    title: selectedMovie.title,
    director: '', // Add more fields as needed
    summary: '',
    genres: '',
  };

  // Emit the 'movies' event with the new movie details
  emit('movies', newMovie);
};

</script>
