<template>
  <div class="shadow mt-16 pa-5">
    <div class="d-flex justify-space-between align-center w-100">
      <p class="text-h6 font-weight-bold">ERP Notas</p>
      <Dialog title="Importar Arquivos">
        <template #trigger>
          <v-btn color="brown_dg" class="rounded-xl">Importar ERP Notas</v-btn>
        </template>
        <UploadFiles
          :url="'/api/gatekeeper/upload_erp_notas/'"
          :multiple="false"
          :accept="'.xlsx'"
          @uploadSuccess="uploadSuccess"
        />
      </Dialog>
    </div>

    <v-data-table
      :headers="filesHeader"
      :items="files"
      class="text-body-2 elevation-1 my-5"
      density="compact"
      item-value="key"
      hover
      :items-per-page="5"
      v-model:options="options"
      locale="'pt'"
    >
      <template #item.status="{ item }">
        <div class="d-flex align-center justify-center">
          <v-icon
            :color="item.status === 'Importado' ? 'green' : 'orange'"
            size="11"
            >mdi-circle</v-icon
          >
          <span class="ml-2">{{ item.status }}</span>
        </div>
      </template>
      <template #item.acoes="{ item }">
        <div class="d-flex align-center justify-center">
          <v-icon small class="mx-1 cursor-pointer" color="red">
            mdi-delete
          </v-icon>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Dialog from "@/components/ui/Dialog.vue";
import UploadFiles from "@/components/ui/UploadFiles.vue";
import { filesService } from "@/services";

const options = ref({
  page: 1,
  itemsPerPage: 5,
});

const filesHeader = ref([
  { title: "Período", key: "periodo", align: "center" },
  { title: "Importado em", key: "importado_em", align: "center" },
  { title: "Quantidade de Linhas", key: "qtd", align: "center" },
  { title: "Nome do arquivo", key: "nome_arquivo", align: "center" },
  { title: "Status", key: "status", align: "center" },
  { title: "Ações", key: "acoes", align: "center", sortable: false },
]);

const files = ref([]);

const uploadSuccess = async () => {
  try {
    const res = await filesService.getFiles("/api/gatekeeper/get_erp_notas");
    files.value = res.data;
  } catch (err) {
    console.error(err);
  }
};

onMounted(async () => {
  const res = await filesService.getFiles("/api/gatekeeper/get_erp_notas");
  files.value = res.data;
});
</script>
