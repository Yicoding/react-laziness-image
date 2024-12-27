---
title: ReactLazinessImage
nav:
  title: 快速上手
  path: /components
---

# ReactLazinessImage

## 安装

```bash
yarn add @xmly/react-laziness-image
```

## 基本用法

<code src="./demos/Basic.tsx"></code>

## 不使用懒加载

<code src="./demos/UnLazy.tsx"></code>

## 使用兜底图

- 图片加载出错时兜底显示 `defaultSrc` 图片

<code src="./demos/InDefault.tsx"></code>

## API

| 属性       | 说明                           | 类型                         | 默认值 |
| ---------- | ------------------------------ | ---------------------------- | ------ |
| src        | 图片地址                       | `string`                     | -      |
| defaultSrc | 兜底图(图片加载失败时兜底显示) | `string`                     | -      |
| useLazy    | 是否使用图片懒加载             | `boolean`                    | `true` |
| className  | 根节点 class 样式              | `string \| undefined`        | -      |
| style      | 根节点 style 样式              | `CSSProperties \| undefined` | -      |

## 说明

- 依赖项（请确保使用组件的项目安装了以下依赖）：

  - `"react": ">=16.8.0"`
  - `"react-dom": ">=16.8.0"`
