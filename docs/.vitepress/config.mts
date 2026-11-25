import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

const zhSidebar = [
  {
    text: '开始使用',
    collapsed: false,
    items: [
      { text: '什么是 Clado', link: '/guide/what-is-clado' },
      { text: 'Clado 本体（核心引擎）', link: '/core/what-is-core' },
      { text: '快速开始与安装', link: '/guide/getting-started' },
      { text: '多子工作区并发协作', link: '/guide/multi-workspace' },
      { text: '移动端适配与触控手势', link: '/guide/mobile-and-gestures' },
    ],
  },
  {
    text: '视图、语法与连线',
    collapsed: false,
    items: [
      { text: '三大视图与画布交互', link: '/syntax/views-and-interactions' },
      { text: 'Markdown 画布规范', link: '/syntax/markdown-canvas' },
      { text: '统一语义 Tag 与精准连线', link: '/syntax/tags-and-links' },
      { text: '模板继承与诊断校验', link: '/syntax/templates-and-diagnostics' },
    ],
  },
  {
    text: 'AI 协作与 MCP',
    collapsed: false,
    items: [
      { text: 'Streamable HTTP MCP 协议', link: '/ai/mcp-protocol' },
      { text: '系统级内置 Agent 与 ACP 派单', link: '/ai/vertical-agent' },
      { text: '实时现场感与人机拍板', link: '/ai/live-collaboration' },
    ],
  },
  {
    text: '内置插件与扩展生态',
    collapsed: false,
    items: [
      { text: '内置插件总览', link: '/plugins/overview' },
      { text: 'clado.brand · 品牌与设置', link: '/plugins/brand' },
      { text: 'clado.view-controls · 视图与诊断', link: '/plugins/view-controls' },
      { text: 'clado.directory · 文档目录', link: '/plugins/directory' },
      { text: 'clado.agent · 灵感 Agent', link: '/plugins/agent' },
      { text: '开发你的第一个插件', link: '/plugins/development' },
      { text: '插件市场与权限审计', link: '/plugins/marketplace' },
    ],
  },
  {
    text: '参考与演进',
    collapsed: false,
    items: [
      { text: 'CLI 命令速查', link: '/reference/cli' },
      { text: '四层微内核系统架构', link: '/reference/architecture' },
      { text: '版本更新日志', link: '/changelog' },
    ],
  },
];

const enSidebar = [
  {
    text: 'Getting Started',
    collapsed: false,
    items: [
      { text: 'What is Clado?', link: '/en/guide/what-is-clado' },
      { text: 'Clado Core Engine', link: '/en/core/what-is-core' },
      { text: 'Quick Start & Installation', link: '/en/guide/getting-started' },
      { text: 'Multi-Workspace Concurrency', link: '/en/guide/multi-workspace' },
      { text: 'Mobile & Touch Gestures', link: '/en/guide/mobile-and-gestures' },
    ],
  },
  {
    text: 'Views, Syntax & Linking',
    collapsed: false,
    items: [
      { text: 'Three Views & Interactions', link: '/en/syntax/views-and-interactions' },
      { text: 'Markdown Canvas Spec', link: '/en/syntax/markdown-canvas' },
      { text: 'Semantic Tags & Precision Links', link: '/en/syntax/tags-and-links' },
      { text: 'Templates & Diagnostics', link: '/en/syntax/templates-and-diagnostics' },
    ],
  },
  {
    text: 'AI Collaboration & MCP',
    collapsed: false,
    items: [
      { text: 'Streamable HTTP MCP', link: '/en/ai/mcp-protocol' },
      { text: 'Built-in Agent & ACP Dispatch', link: '/en/ai/vertical-agent' },
      { text: 'Live Presence & Human Decisions', link: '/en/ai/live-collaboration' },
    ],
  },
  {
    text: 'Built-in Plugins & Ecosystem',
    collapsed: false,
    items: [
      { text: 'Built-in Plugins Overview', link: '/en/plugins/overview' },
      { text: 'clado.brand · Brand & Settings', link: '/en/plugins/brand' },
      { text: 'clado.view-controls · Views & Diagnostics', link: '/en/plugins/view-controls' },
      { text: 'clado.directory · Documents & Workspaces', link: '/en/plugins/directory' },
      { text: 'clado.agent · Inspiration Agent', link: '/en/plugins/agent' },
      { text: 'Build Your First Plugin', link: '/en/plugins/development' },
      { text: 'Plugin Marketplace & Audit', link: '/en/plugins/marketplace' },
    ],
  },
  {
    text: 'Reference',
    collapsed: false,
    items: [
      { text: 'CLI Reference', link: '/en/reference/cli' },
      { text: 'Microkernel Architecture', link: '/en/reference/architecture' },
      { text: 'Changelog', link: '/en/changelog' },
    ],
  },
];

export default withMermaid(
  defineConfig({
    base: '/clado-docs/',
    title: 'Clado',
    description: 'Markdown 可视化画布、Streamable HTTP MCP 与研发设计垂直 Agent',
    cleanUrls: true,
    lastUpdated: true,
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/clado-docs/logo.svg' }],
      ['meta', { name: 'theme-color', content: '#2563eb' }],
    ],

    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-CN',
        title: 'Clado',
        description: 'Markdown 可视化画布 · MCP 协议 · 独立研发 Agent',
        themeConfig: {
          nav: [
            { text: '指南', link: '/guide/what-is-clado', activeMatch: '/guide/' },
            { text: 'Clado 本体', link: '/core/what-is-core', activeMatch: '/core/' },
            { text: '语法与连线', link: '/syntax/tags-and-links', activeMatch: '/syntax/' },
            { text: 'AI 与 MCP', link: '/ai/mcp-protocol', activeMatch: '/ai/' },
            { text: '插件生态', link: '/plugins/overview', activeMatch: '/plugins/' },
            { text: '参考', link: '/reference/cli', activeMatch: '/reference/' },
            { text: '0.5.5-beta.5', link: '/changelog' },
          ],
          sidebar: zhSidebar,
          outline: { level: [2, 3], label: '本页目录' },
          docFooter: { prev: '上一页', next: '下一页' },
          darkModeSwitchLabel: '主题外观',
          lightModeSwitchTitle: '切换到浅色模式',
          darkModeSwitchTitle: '切换到深色模式',
          sidebarMenuLabel: '章节目录',
          returnToTopLabel: '回到顶部',
          lastUpdated: { text: '最后更新于' },
          footer: {
            message: '纯文本即单一事实源 · 零黑盒可视化协作画布',
            copyright: 'Copyright © 2026 Clado (cladogram)',
          },
        },
      },
      en: {
        label: 'English',
        lang: 'en-US',
        link: '/en/',
        title: 'Clado',
        description: 'Markdown Visual Canvas · Streamable HTTP MCP · Vertical Engineering Agent',
        themeConfig: {
          nav: [
            { text: 'Guide', link: '/en/guide/what-is-clado', activeMatch: '/en/guide/' },
            { text: 'Clado Core', link: '/en/core/what-is-core', activeMatch: '/en/core/' },
            { text: 'Syntax & Links', link: '/en/syntax/tags-and-links', activeMatch: '/en/syntax/' },
            { text: 'AI & MCP', link: '/en/ai/mcp-protocol', activeMatch: '/en/ai/' },
            { text: 'Plugins', link: '/en/plugins/overview', activeMatch: '/en/plugins/' },
            { text: 'Reference', link: '/en/reference/cli', activeMatch: '/en/reference/' },
            { text: '0.5.5-beta.5', link: '/en/changelog' },
          ],
          sidebar: enSidebar,
          outline: { level: [2, 3], label: 'On this page' },
          docFooter: { prev: 'Previous page', next: 'Next page' },
          footer: {
            message: 'Plain Markdown as the Single Source of Truth.',
            copyright: 'Copyright © 2026 Clado (cladogram)',
          },
        },
      },
    },

    themeConfig: {
      logo: '/logo.svg',
      siteTitle: 'Clado',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/GodShelvis/clado-docs' },
        { icon: 'npm', link: 'https://www.npmjs.com/package/cladogram' },
      ],
      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
                modal: {
                  noResultsText: '没有找到相关内容',
                  resetButtonTitle: '清除查询条件',
                  footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                  },
                },
              },
            },
          },
        },
      },
    },

    mermaid: {
      theme: 'neutral',
    },
  })
);
