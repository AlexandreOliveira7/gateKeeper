<template>
  <v-row class="mt-2">
    <v-col cols="12" md="6">
      <div class="">
        <p class="font-weight-bold text-h5 text-xl-h4 font-museo mt-0 mb-0">
          GateKeeper
        </p>
        <p class="font-weight-bold text-h6 text-xl-h5 mt-0 mb-0">
          GateKeeper | <span class="text-brown_dg">{{ title }}</span>
        </p>
      </div>
    </v-col>

    <v-col class="d-flex justify-end align-start" cols="12" md="6">
      <div class="d-flex bg-white pa-3 shadow rounded-lg" style="height: 60px">
        <p class="bg-orange_dg mr-3 px-4 h-100"></p>
        <div class="mr-2">
          <p class="text-body-2 text-brown_dg mb-0">00.000.000/0000-00</p>
          <p class="text-body-2 mt-0">RECONFLEX LTDA</p>
        </div>
        <v-icon color="brown_dg" class="mr-1 cursor-pointer">mdi-repeat</v-icon>
        <v-icon color="red_dg" class="cursor-pointer">mdi-exit-to-app</v-icon>
      </div>
    </v-col>
  </v-row>
</template>
<script setup>
defineProps({
  title: {
    type: String,
  },
});
</script>

<style>
.shadow {
  box-shadow: 0 10px 30px 0 rgb(24 28 33 / 5%);
}
</style>
