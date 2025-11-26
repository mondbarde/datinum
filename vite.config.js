import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'datinum';
const isVercel = !!process.env.VERCEL;
const explicitBase = process.env.VITE_BASE_PATH;
const useGhPagesBase = process.env.GH_PAGES === 'true';

// https://vite.dev/config/
// 기본은 루트 배포(/). GitHub Pages 등 서브 경로 배포가 필요하면
//  - VITE_BASE_PATH=/custom/ 경로를 넣거나
//  - GH_PAGES=true 환경변수로 /datinum/ 기본값을 사용.
export default defineConfig({
  base: explicitBase ?? (useGhPagesBase ? `/${repoName}/` : '/'),
  plugins: [react()],
});
