import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = process.env.VITE_REPO_NAME || 'Alicia-Lozano-Design'

export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,
})
