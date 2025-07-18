import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/Amineelkarroudi',
  },
  // Add a chat link (e.g., Discord, Slack)
  chat: {
    link: 'https://discord.gg/your-invite-code',
  },
  // Repository base for "Edit this page" links
  docsRepositoryBase: 'https://github.com/Amineelkarroudi/your-repo/tree/main',
  // Show "Edit this page" link
  editLink: {
    text: 'Edit this page on GitHub',
  },
  // Enable or disable dark mode
  darkMode: true,
  // Show or hide the Table of Contents
  toc: {
    float: true, // or false to keep it inline
  },
  // Search configuration
  search: {
    placeholder: 'Search documentation...',
    // Optionally, you can add custom search providers
  },
  // Sidebar configuration
  sidebar: {
    defaultMenuCollapseLevel: 1, // 0 = all expanded, 1 = first level collapsed
    toggleButton: true, // show/hide sidebar toggle button
  },
  // Footer text
  footer: {
    text: 'Content By Amine El karroudi | 2025',
  },
  // Banner for announcements
  banner: {
    key: 'v1-release',
    text: (
      <a href="https://github.com/Amineelkarroudi/your-repo/releases/tag/v1.0" target="_blank" rel="noreferrer">
        🎉 Version 1.0 released! Read more →
      </a>
    ),
  },
  // Custom favicon
  faviconGlyph: '📘',
  // Show last updated timestamp
  gitTimestamp: true,
  // Show reading time
  readingTime: true,
  // Custom 404 page
  notFound: {
    title: 'Page Not Found',
    content: <span>Sorry, we couldn’t find what you’re looking for.</span>,
  },
}

export default config
