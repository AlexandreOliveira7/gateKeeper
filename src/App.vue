<template>
  <v-app>
    <v-main>
      <v-container class="pa-6" fluid>
        <HeaderEnterprises />
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import HeaderEnterprises from "@/components/common/HeaderEnterprises.vue";
</script>
