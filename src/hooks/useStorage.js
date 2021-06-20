import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFireStore,
  timestamp,
} from "../firebase/config";

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    //menyimpan data di storage dengan nama file
    const storageRef = projectStorage.ref(file.name);
    //membuat colletion bernama image di firestore
    const collectionRef = projectFireStore.collection("images");

    //proses menyimpan data di storage dan mengambil url serta timestamp createdAt
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};
