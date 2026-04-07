import type { NextConfig } from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const basePath = isGithubActions && repositoryName ? `/${repositoryName}` : '';

const nextConfig: NextConfig = {
  output: isGithubActions ? 'export' : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: isGithubActions,
    qualities: [75, 100],
  },
};

export default nextConfig;
