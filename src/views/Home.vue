<template>
  <div>
    <Header title="Movies Collection" />
    <list-movie :movies="data" @set-target="handleMovieClick" />

    <q-dialog v-model="modal">
      <detail-movie
        :selected-movie="selectedMovie"
        :get-title="titleModal"
        :is-new="isNewMovie"
        @close="closePopup()"
        @create-movie="createMovie"
        @update-movie="updateMovie"
        @delete-movie="deleteMovie"
      />
    </q-dialog>
    
    <q-page-sticky position="bottom-right" @click="createData" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" />
    </q-page-sticky>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from '../components/Header.vue';
import ListMovie from '../components/ListMovie.vue';
import DetailMovie from '../components/DetailMovie.vue';
import DummyData from '../api/data.json';

const data = ref([]);
const titleModal = ref('');
const modal = ref(false);
const selectedMovie = ref(null);
const isNewMovie = ref(false);

onMounted(() => {
  data.value = DummyData;
});

const handleMovieClick = (id) => {
  titleModal.value = 'View Movie'
  const selectMovie = data.value.find(movie => movie.id === id);
  if (selectMovie) {
    selectedMovie.value = selectMovie;
    modal.value = true
    isNewMovie.value = false;
  }
}

const updateMovie = (updatedMovie) => {
  const index = data.value.findIndex((movie) => movie.id === updatedMovie.id);
  if (index !== -1) {
    data.value.splice(index, 1, updatedMovie);
  }
  closePopup();
};

const deleteMovie = (id) => {
  data.value = data.value.filter((movie) => movie.id !== id);
  closePopup();
};

// Event handler for handling create action
const createMovie = (newMovie) => {
  // Add the new movie to the data array
  data.value.push(newMovie);
  closePopup();
};

const createData = () => {
  titleModal.value = 'Create Movie';
  modal.value = true;
  // Add a new movie to the data array
  const newMovie = {
    id: generateUniqueId(),
    title: 'Embed New Movie',
    director: 'Embed New Director',
    summary: 'Embed Movie summary',
    genres: [],
  };
  selectedMovie.value = newMovie;
  isNewMovie.value = true;
};

const closePopup = () => {
  titleModal.value = ''
  modal.value = false
  selectedMovie.value = Object.assign({}, null);
  modal.value = false;
}

// Function to generate a unique ID
const generateUniqueId = () => {
  return Date.now().toString();
};

</script>
