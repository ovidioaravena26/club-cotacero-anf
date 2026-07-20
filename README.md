# Club Deportivo Cota Cero ANF — Prototipo Web

Prototipo interactivo generado automáticamente a partir del archivo Adobe XD
(`Club_CotaCero_ANF_v2_actualizado.xd`, ya con el logo circular, colores
corporativos y las interacciones de la secuencia de autorización aplicadas).

## Qué es esto
- `index.html` — shell de la app (carga las pantallas y la lógica de navegación).
- `screens.html` — las 234 pantallas (mesas de trabajo) reconstruidas como HTML/CSS,
  posicionadas según las coordenadas exactas del archivo original.
- `interactions.json` — todas las interacciones (tap / auto-avance por tiempo,
  destino, duración, transición) extraídas tal cual del archivo .xd.
- `artboards.json` — nombre, tamaño y posición de cada pantalla.
- `assets/` — imágenes y logos usados en el diseño.

## Ejecutar localmente
No necesita build ni Node — es HTML/CSS/JS puro. Cualquiera de estas opciones sirve:

```bash
cd site
python3 -m http.server 8080
# abrir http://localhost:8080
```

## Desplegar en Firebase Hosting (gratis)
1. Instalá Firebase CLI (si no la tenés):
   ```bash
   npm install -g firebase-tools
   ```
2. Iniciá sesión con tu cuenta:
   ```bash
   firebase login
   ```
3. Creá un proyecto en https://console.firebase.google.com (o usá uno existente)
   y reemplazá `REEMPLAZA-CON-TU-PROJECT-ID` en `.firebaserc` por el ID real.
4. Desplegá:
   ```bash
   firebase deploy --only hosting
   ```
   Te va a devolver una URL pública tipo `https://tu-proyecto.web.app`.

## Subir a GitHub
```bash
git init
git add .
git commit -m "Prototipo inicial Club Cota Cero ANF"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/club-cotacero-anf.git
git push -u origin main
```

## Limitaciones conocidas de esta primera versión (automática)
- La conversión reconstruye posiciones, colores, imágenes y textos de forma
  automática desde el archivo .xd — es fiel en la mayoría de los casos, pero
  íconos vectoriales complejos y algunas líneas/adornos finos pueden verse
  simplificados respecto al diseño original.
- El tipo de letra y tamaños de texto usan un valor por defecto (no se
  extrajeron los estilos tipográficos exactos de cada texto todavía).
- Las 234 pantallas están todas incluidas y navegables según la configuración
  real de interacciones del archivo (tap y auto-avance por tiempo, con
  transición "dissolve" y las duraciones configuradas).

Si querés que afine el resultado visual pantalla por pantalla (tipografías,
íconos, ajustes finos), decime cuáles priorizar.
