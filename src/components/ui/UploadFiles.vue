<template>
  <div>
    <div class="mb-8">
      <p class="text-body-1">
        <span class="font-weight-bold text-body-1">Empresa Selecionada: </span
        >RECONFLEX
      </p>
      <p class="text-body-1">
        <span class="font-weight-bold text-body-1">CNPJ: </span
        >00.000.000/0000-00
      </p>
    </div>
    <v-form
      class="formContainModal d-flex justify-center align-center bg-gray100_dg cursor-pointer"
      @click="$refs.fileInput.click()"
      @dragover.prevent="dragAbout"
      @dragleave.prevent="exitAreaDrag"
      @drop.prevent="release"
    >
      <input
        ref="fileInput"
        type="file"
        :accept="accept"
        :multiple="multiple"
        style="display: none"
        @change="handleFileChange"
      />
      <div class="d-flex flex-column justify-center align-center">
        <v-icon>mdi-upload</v-icon>
        <p>Arraste o arquivo ou clique aqui</p>
      </div>
    </v-form>

    <p class="ml-3 mt-1 text-body-2 font-weight-bold">
      {{
        files.length > 0
          ? `Arquivos adicionados: ${files.length}`
          : "Nenhum arquivo adicionado"
      }}
    </p>

    <v-row class="file-listing-size mt-2" v-if="files.length">
      <v-col v-for="(file, index) in files" :key="index" cols="12">
        <div
          class="bg-gray100_dg d-flex justify-space-between align-center pa-2 border-b"
        >
          <p class="ml-3 mt-1 text-body-2">{{ file.name }}</p>
          <v-icon size="20" color="red_dg" @click.stop="removeFile(index)">
            mdi-delete
          </v-icon>
        </div>
      </v-col>
    </v-row>

    <div class="mt-6 text-body-2">
      <p>
        <span class="font-weight-bold"> Transação Segura</span>
        / LGPD - Após a coleta dos dados cadastrais e de encerramento, para fins
        de segurança do acesso e estatíticos, os dados serão totalmente
        criptografados. Não temos acesso aos seus dados.
      </p>
    </div>

    <div class="d-flex justify-end mt-10">
      <v-btn
        class="mt-3"
        color="brown_dg"
        @click="upload"
        :disabled="!files.length"
      >
        {{ isSending ? "Enviando..." : "Fazer upload" }}
      </v-btn>
    </div>
  </div>
  <v-card color="white" class="rounded-lg">
    <v-snackbar
      v-model="showToast"
      :timeout="3000"
      location="top right"
      :multi-line="false"
      :vertical="false"
      color="white"
      class="snackbar"
    >
      <div
        class="pa-3"
        :style="{
          border: `2px solid ${snackInfo.color}`,
          borderRadius: '6px',
          color: snackColor,
        }"
      >
        <p class="font-weight-bold">{{ snackInfo.title }}</p>
        <p>{{ snackInfo.text }}</p>
      </div>
    </v-snackbar>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { filesService } from "@/services";

const props = defineProps({
  url: { type: String, required: true },
  multiple: { type: Boolean, default: false },
  accept: { type: String, default: ".txt,.xlsx" },
});

const emit = defineEmits(["uploadSuccess"]);

const files = ref([]);
const isSending = ref(false);
const showToast = ref(false);
const snackInfo = ref({
  color: "",
  title: "",
  text: "",
});

function handleFileChange(e) {
  const selected = Array.from(e.target.files);
  files.value = props.multiple ? [...files.value, ...selected] : [selected[0]];
}

const dragAbout = (event) => {
  event.currentTarget.classList.add("dragOver");
};
const exitAreaDrag = (event) => {
  event.currentTarget.classList.remove("dragOver");
};

function release(e) {
  const dropped = Array.from(e.dataTransfer.files);
  files.value = props.multiple ? [...files.value, ...dropped] : [dropped[0]];
}

function removeFile(index) {
  files.value.splice(index, 1);
}

const openToast = (title, text, color) => {
  snackInfo.value.title = title;
  snackInfo.value.text = text;
  snackInfo.value.color = color;
  showToast.value = true;
};

const upload = async () => {
  if (!files.value.length) return;

  isSending.value = true;
  const formData = new FormData();
  files.value.forEach((file) => {
    formData.append(props.multiple ? "files" : "file", file);
  });

  try {
    await filesService.uploadFile(props.url, formData);
    openToast(
      "Arquivo enviado!",
      "Seu arquivo foi enviado com sucesso",
      "green"
    );
    emit("uploadSuccess");
  } catch (err) {
    openToast("Arquivo nao enviado!", "Erro ao enviar o arquivo", "red");
  } finally {
    isSending.value = false;
    files.value = [];
  }
};
</script>

<style scoped></style>
