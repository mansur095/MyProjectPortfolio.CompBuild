# PC Builder

Приложение для подбора и сборки ПК онлайн. Позволяет пользователю выбрать комплектующие, посмотреть сборки и получить рекомендации.

## 🚀 Быстрый старт

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/mansur095/MyProjectPortfolio.CompBuild.git
   cd pc-builder
   ```
2. **Установите зависимости:**
   ```bash
   npm install
   ```
3. **Запустите проект в режиме разработки:**
   ```bash
   npm run dev
   ```
   После запуска проект будет доступен по адресу, который покажет консоль (обычно http://localhost:5173).

4. **Сборка для продакшена:**
   ```bash
   npm run build
   ```
   Готовые файлы появятся в папке `dist/`.

## 🗂️ Структура проекта

- `src/` — исходный код приложения
  - `components/` — переиспользуемые компоненты (в том числе иконки)
  - `views/` — основные страницы (Home, Builds)
  - `composables/` — кастомные хуки (например, useScroll)
  - `assets/` — изображения, видео и стили
  - `router/` — роутинг приложения
  - `main.ts` — точка входа
- `public/` — статические файлы
- `index.html` — основной HTML шаблон

## 🛠️ Основные зависимости
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## 📦 Скрипты
- `npm run dev` — запуск в режиме разработки
- `npm run build` — сборка для продакшена
- `npm run preview` — предпросмотр собранного приложения

## 📸 Скриншоты
...

## 👤 Автор
mansur095

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
