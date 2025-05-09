import { api } from "@/api";

class FilesService {
  async uploadFile(url, data) {
    return api.post(url, data);
  }

  async getFiles(url) {
    return api.get(url);
  }
}

const filesService = new FilesService();

export { filesService };
