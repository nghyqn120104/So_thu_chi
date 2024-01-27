import { ref } from "vue";
import { projectFirestore } from "@/configs/firebase";
import { collection, addDoc } from "firebase/firestore";

const useCollection = (name) => {
  const error = ref(null);

  async function addRecord(record) {
    error.value = null;

    try {
      const response = await addDoc(collection(projectFirestore, name), record);
      return response;
    } catch (err) {
      console.error(err);
      error.value = `Error adding record: ${err.message || err}`;
      console.log(error.value);
    }
  }

  return { addRecord, error };
};

export default useCollection;
