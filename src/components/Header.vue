<template>
  <q-header>
    <q-toolbar>
      <q-toolbar-title>
        {{ title }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup>
const props = defineProps(['title']);
</script>