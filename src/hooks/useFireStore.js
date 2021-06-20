import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config";

export const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    //ambil collection dari firestore
    const unsub = projectFireStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      //jika ada perubahan didalam collection maka code dibawah ini akan tertrigger
      //mengambil multiple documents dan set data baru secara keseluruhan secara realtime (ini hanya database, bukan storage gambar).
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    //mencegah isu kebocoran memory dan menghindari bugs saat unmount component ImageGrid
    return () => unsub();
  }, [collection]);

  return { docs };
};
