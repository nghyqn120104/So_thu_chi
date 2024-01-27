import { ref } from "vue";
import { projectStorage } from "@/configs/firebase";
import { useUser } from "./useUser";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";

const { getUser } = useUser();
const { user } = getUser();

const useStorage = (name) => {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);

  async function upLoadFile(file) {
    filePath.value = `${name}/${user.value.uid}/${file.name}`;
    const fileRef = storageRef(projectStorage, filePath.value);
    console.log(fileRef);

    try {
      await uploadBytes(fileRef, file);
      url.value = await getDownloadURL(fileRef);
      return url.value;
    } catch (err) {
      console.error(err);
      error.value = `Error adding record: ${err.message || err}`;
      console.log(error.value);
    }
  }

  return { upLoadFile, error, filePath, url };
};

export default useStorage;
