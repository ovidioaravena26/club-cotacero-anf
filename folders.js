// folders.js — vista de "Carpetas" (básica: entrar a ver carpetas -> archivos -> link a Drive)

let db = null;

async function initFirestoreIfConfigured() {
  if (!window.FIREBASE_CONFIGURED) return null;
  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
    const { getFirestore, collection, getDocs } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
    const app = initializeApp(window.firebaseConfig);
    db = getFirestore(app);
    return { collection, getDocs };
  } catch (e) {
    console.warn("No se pudo inicializar Firestore, usando datos locales.", e);
    return null;
  }
}

async function loadCarpetas() {
  const fs = await initFirestoreIfConfigured();
  if (fs && db) {
    try {
      const snap = await fs.getDocs(fs.collection(db, "carpetas"));
      const carpetas = [];
      snap.forEach(doc => carpetas.push({ id: doc.id, ...doc.data() }));
      if (carpetas.length) return carpetas;
    } catch (e) {
      console.warn("Error leyendo Firestore, uso datos locales:", e);
    }
  }
  // Modo demo / fallback: datos locales (sin necesidad de cuenta de Firebase)
  const res = await fetch('data/folders.seed.json');
  const data = await res.json();
  return data.carpetas;
}

function renderCarpetas(carpetas) {
  const root = document.getElementById('carpetas-root');
  root.innerHTML = '';

  const listView = document.createElement('div');
  listView.className = 'carpetas-list';

  carpetas.forEach(carpeta => {
    const item = document.createElement('div');
    item.className = 'carpeta-item';
    item.innerHTML = `📁 <span>${carpeta.nombre}</span>`;
    item.onclick = () => renderArchivos(carpeta);
    listView.appendChild(item);
  });

  root.appendChild(listView);
}

function renderArchivos(carpeta) {
  const root = document.getElementById('carpetas-root');
  root.innerHTML = '';

  const back = document.createElement('div');
  back.className = 'carpeta-back';
  back.innerHTML = '← Volver a carpetas';
  back.onclick = () => loadCarpetas().then(renderCarpetas);
  root.appendChild(back);

  const title = document.createElement('h3');
  title.textContent = carpeta.nombre;
  root.appendChild(title);

  const list = document.createElement('div');
  list.className = 'archivos-list';
  (carpeta.archivos || []).forEach(archivo => {
    const item = document.createElement('a');
    item.className = 'archivo-item';
    item.href = archivo.driveUrl;
    item.target = '_blank';
    item.rel = 'noopener';
    item.innerHTML = `📄 <span>${archivo.nombre}</span>`;
    list.appendChild(item);
  });
  root.appendChild(list);
}

async function bootCarpetas() {
  const carpetas = await loadCarpetas();
  renderCarpetas(carpetas);
}

window.bootCarpetas = bootCarpetas;
