import sitemap from "@astrojs/sitemap";
/** @type {import('astro').AstroUserConfig} */
export default { site: 'https://calcdomain.com', integrations: [sitemap()], build: { format: 'directory' } };
