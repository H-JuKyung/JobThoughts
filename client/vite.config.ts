import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 클라이언트에서 /api/questions로 요청 → 서버의 http://localhost:3000/questions로 전달
      '/api': {
        target: 'http://localhost:3000', // 🔁 Express 서버가 여기서 실행 중이어야 함
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
