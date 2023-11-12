<template>
  <div>
    <q-page class="row q-pa-md q-gutter-sm">
      <q-card
        v-for="(movie, k) in movies"
        :key="k"
        class="col-12 col-md-2 q-ma-md q-hoverable custom-card"
        style="max-height: 300px;"
        @click="openModal(movie.id)"
      >
        <q-card-section >
          <q-item-section>
            <q-item-label class="text-h6">{{ movie.title }}</q-item-label>
            <q-item-label class="text-subtitle2">{{ movie.director }}</q-item-label>
          </q-item-section>
          <q-separator />
          <q-card-section>
            {{ movie.summary }}
            <div>
              <label v-for="genre in movie.genres" :key="genre" class="q-mr-xs">
                <q-badge :label="genre" color="primary" class="col"/>
              </label>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-page>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['movies']);
const emits = defineEmits();

const openModal = (val) => {
  emits('set-target', val);
};
</script>

<style scoped>
.custom-card:hover {
  box-shadow: 0px 0px 10px 0px rgba(58, 90, 235, 0.2);
  /* Add your preferred box-shadow styles here */
}
</style>
