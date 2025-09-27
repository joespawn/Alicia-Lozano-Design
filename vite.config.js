import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANTE: cambia 'REPO_NAME' por el nombre de tu repositorio de GitHub
const repo = process.env.VITE_REPO_NAME || 'REPO_NAME'

export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,
})
