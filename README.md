# Publicar en GitHub Pages (Vite + React)

## Pasos rápidos
1. Crea un repositorio nuevo en GitHub, por ejemplo: `alicia-lozano-design`.
2. Sube estos archivos.
3. Ve a **Settings → Pages** y en "Build and deployment" selecciona **GitHub Actions**.
4. Asegúrate de tener la rama **main** como default. Haz un push (o sube desde web).
5. La acción `Deploy to GitHub Pages` se ejecutará sola y publicará tu sitio.

## Importante
- En `vite.config.js` la opción `base` se calcula con `VITE_REPO_NAME` y por defecto usa `REPO_NAME`.

  La acción de GitHub define `VITE_REPO_NAME` automáticamente con el nombre de tu repo.

- Si deseas publicar desde otra rama, cambia `branches: [ main ]` en el workflow.

## Desarrollo local
```bash
npm i
npm run dev
```
Luego abre http://localhost:5173
