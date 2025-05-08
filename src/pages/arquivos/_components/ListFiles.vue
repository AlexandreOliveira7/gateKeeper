<template>
  <div class="shadow mt-16 pa-5">
    <div class="d-flex justify-space-between align-center w-100">
      <p class="text-h6 font-weight-bold">Arquivos</p>
      <Dialog title="Importar Arquivos">
        <template #trigger>
          <v-btn color="brown_dg" class="rounded-xl">Importar Arquivos</v-btn>
        </template>
        <UploadFiles :url="'/teste'" :multiple="true" />
      </Dialog>
    </div>

    <v-data-table
      :headers="itensHeader"
      :items="itens"
      class="text-body-2 elevation-1 my-5"
      density="compact"
      item-value="id"
      hide-default-footer
      hover
    >
      <template #item.status="{ item }">
        <v-icon color="green" size="small">mdi-circle</v-icon>
        <span class="ml-2">Importado</span>
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Dialog from "@/components/ui/Dialog.vue";
import UploadFiles from "@/components/ui/UploadFiles.vue";

const itensHeader = ref([
  { title: "Importado em", key: "importado_em", align: "center" },
  { title: "Tipo de Arquivo", key: "tipo_arquivo", align: "center" },
  { title: "Período", key: "periodo", align: "center" },
  { title: "Qtd. de Linhas", key: "qtd_linhas", align: "center" },
  { title: "Status", key: "status", align: "center" },
]);

const itens = ref([
  {
    id: 1,
    importado_em: "07/05/2025 10:30",
    tipo_arquivo: "Empresas",
    periodo: "Abril/2025",
    qtd_linhas: 1542,
    status: "importado",
  },
  {
    id: 2,
    importado_em: "07/05/2025 10:45",
    tipo_arquivo: "Funcionários",
    periodo: "Abril/2025",
    qtd_linhas: 3810,
    status: "importado",
  },
]);
</script>
