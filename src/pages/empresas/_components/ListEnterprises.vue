<template>
  <div class="shadow mt-16 pa-5">
    <v-data-table
      :headers="itensHeader"
      :items="itens"
      class="text-body-2 elevation-1 my-5"
      density="compact"
      item-value="id"
      hide-default-footer
      hover
    >
    </v-data-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
const itensHeader = ref([
  { title: "CNPJ", key: "cnpj", align: "center" },
  { title: "Razão Social", key: "razao_social", align: "center" },
  { title: "Licença", key: "licenca", align: "center" },
]);

const itens = ref([
  {
    id: 1,
    cnpj: "00.000.000/0000-00",
    razao_social: "RECONFLEX LTDA",
    licenca: "Empresarial",
  },
  {
    id: 2,
    cnpj: "00.000.000/0001-91",
    razao_social: "DGTAX LTDA",
    licenca: "Empresarial",
  },
]);
</script>
