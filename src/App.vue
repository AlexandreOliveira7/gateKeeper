<template>
  <v-app>
    <v-main class="bg-gray100_dg">
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

<style>
.font-museo {
  font-family: MuseoModerno, sans-serif;
}

.v-data-table thead th {
  background-color: #6a3d31 !important;
  color: white !important;
}

.v-data-table th {
  padding: 10px 16px !important;
}

.v-data-table td {
  padding: 6px 16px !important;
}
</style>
