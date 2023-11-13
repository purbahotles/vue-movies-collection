<template>
  <div class="q-pa-md q-gutter-sm">
    <q-card>
      <q-card-actions>
        <div class="text-h6 q-mr-md" align="left">{{ getTitle }}</div>
        <q-btn flat class="q-ml-auto" label="Close" color="primary" @click="$emit('close')" />
      </q-card-actions>

      <q-separator />

      <q-card-section style="max-height: 50vh" class="scroll">
        <q-input
          filled
          v-model="selectedMovie.title"
          label="Title"
          :dense="dense"
          @input="emitMoviesEvent"
          :rules="titleRules"
        />
        <q-input
          filled
          v-model="selectedMovie.director"
          label="Director"
          :dense="dense"
          @input="emitMoviesEvent"
          :rules="directorRules"
        />
        <q-input
          filled
          v-model="selectedMovie.summary"
          label="Summary"
          type="textarea"
          :dense="dense"
          @input="emitMoviesEvent"
          :rules="summaryRules"
        />

        <q-toggle
          v-for="genre in genres"
          :key="genre"
          size="xs"
          v-model="selectedMovie.genres"
          :val="genre"
          :label="genre"
        />
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn
          v-if="isNew"
          label="Create"
          color="primary"
          @click="createNewMovie"
        />

        <q-btn
          v-else
          label="Update"
          color="primary"
          @click="updateMovie"
        />
        <q-btn label="Delete" color="negative" @click="deleteMovie" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps(['selectedMovie', 'getTitle', 'dense', 'isNew']);
const emits = defineEmits();

const titleRules = [(v) => !!v || 'Title is required'];
const directorRules = [(v) => !!v || 'Director is required'];
const summaryRules = [
  (v) => !!v || 'Summary is required',
  (v) => v.length <= 100 || 'Summary must be 100 characters or less',
];

const genres = ref([
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Sci-Fi',
  'Animation',
  'Crime'
]);

const emitMoviesEvent = () => {
  const newMovie = {
    title: props.selectedMovie.title,
    director: props.selectedMovie.director,
    summary: props.selectedMovie.summary,
    genres: props.selectedMovie.genres,
  };

  // Emit the 'movies' event with the new movie details
  emits('movies', newMovie);
};

const updateMovie = () => {
  // Emit an event to notify the parent component about the update action
  if (validateForm()) {
    emits('update-movie', props.selectedMovie);
  }
};

const createNewMovie = () => {
  // Emit an event to notify the parent component about the create action
  if (validateForm()) {
    emits('create-movie', props.selectedMovie);
  }
};

const deleteMovie = () => {
  // Emit an event to notify the parent component about the delete action
  if (validateForm()) {
    emits('delete-movie', props.selectedMovie.id);
  }
};

// Function to validate the form
const validateForm = () => {
  if (!props.selectedMovie.title || !props.selectedMovie.director || !props.selectedMovie.summary) {
    // Show an alert or handle validation error
    alert('Please fill in all required fields.');
    return false;
  }
  return true;
};
</script>
