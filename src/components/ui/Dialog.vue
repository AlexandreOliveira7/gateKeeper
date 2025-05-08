<template>
  <div>
    <div @click="open">
      <slot name="trigger" />
    </div>

    <v-dialog v-model="isOpen" :max-width="width">
      <v-card class="pa-2">
        <v-card-title class="d-flex justify-space-between border-b">
          <p class="font-weight-bold text-h6 text-brown_dg">{{ title }}</p>
          <v-icon @click="close" size="25">mdi-close</v-icon>
        </v-card-title>

        <v-card-text class="mt-5">
          <slot />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    required: false,
    default: "Defina um titulo",
  },
  width: {
    type: String,
    required: false,
    default: "800",
  },
});

const isOpen = ref(false);
function open() {
  isOpen.value = true;
}
function close() {
  isOpen.value = false;
}
</script>
