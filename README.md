# React + TypeScript + Vite

для работы использовать yarn

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// показать на смартфон
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  }
})

//необходимые библитеки MUI для Data
//npm
npm install @mui/x-date-pickers
npm install dayjs
npm install @mui/material @emotion/react @emotion/styled
//yarn
yarn add @mui/x-date-pickers
yarn add dayjs
yarn add @mui/material @emotion/react @emotion/styled

//необходимые библитеки MUI
//npm
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @fontsource/roboto
npm install @mui/icons-material
npm install @mui/system @emotion/react @emotion/styled
npm install @mui/system @mui/styled-engine-sc styled-components

//yarn
yarn add @mui/material @emotion/react @emotion/styled
yarn add @mui/material @mui/styled-engine-sc styled-components
yarn add @fontsource/roboto
yarn add @mui/icons-material
yarn add @mui/system @emotion/react @emotion/styled
yarn add @mui/system @mui/styled-engine-sc styled-components

//снять ограничения с ком.строки
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted


```
