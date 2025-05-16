<template>
  <v-app>
    <v-main class="bg-gray100_dg">
      <v-container class="pa-6" fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup></script>

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

.fileInput {
  display: none;
}

.formContainModal {
  height: 120px;
  border-radius: 5px;
  border: 2px dashed #bfbfbf;
}

.formContain {
  height: 180px;
  width: 700px;
  border-radius: 5px;
  border: 2px dashed #bfbfbf;
}
.dragOver {
  border: 2px dashed #000;
  background-color: #f0f0f0;
}
</style>
