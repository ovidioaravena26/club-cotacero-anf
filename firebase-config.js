// Reemplazá estos valores por los de TU proyecto de Firebase
// (Firebase Console > ⚙ Configuración del proyecto > Tus apps > SDK setup and configuration)
const firebaseConfig = {
  apiKey: "REEMPLAZAR",
  authDomain: "REEMPLAZAR.firebaseapp.com",
  projectId: "REEMPLAZAR",
  storageBucket: "REEMPLAZAR.appspot.com",
  messagingSenderId: "REEMPLAZAR",
  appId: "REEMPLAZAR"
};

// Si dejás los valores en "REEMPLAZAR", la app funciona igual usando
// data/folders.seed.json como fuente local (modo demo, sin necesidad de cuenta).
const FIREBASE_CONFIGURED = firebaseConfig.apiKey !== "REEMPLAZAR";
