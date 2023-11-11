<template>
  <div>
    <Header title="Movies Collection" />
    <list-movie :movies="data" @set-target="handleMovieClick" />

    <q-dialog v-model="modal">
      <detail-movie :selected-movie="selectedMovie" @close="closePopup()"/>
    </q-dialog>
    
    <q-page-sticky position="bottom-right" @click="openPopUp" :offset="[18, 18]">
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

onMounted(() => {
  data.value = DummyData;
});

const handleMovieClick = (id) => {
  titleModal.value = 'View Movie'
  const selectMovie = data.value.find(movie => movie.id === id);
  if (selectMovie) {
    selectedMovie.value = selectMovie;
    modal.value = true
  }
}

const openPopUp = () => {
  titleModal.value = 'Create Movie'
  modal.value = true
  selectedMovie.value = Object.assign({}, null);
}

const closePopup = () => {
  titleModal.value = ''
  modal.value = false
  selectedMovie.value = Object.assign({}, null);
  modal.value = false;
}

</script>
