---
description: Creates a new React component file with standard structure.
---

# Workflow Steps

## 1. Create the Main Component File

-  **Action:**  
   Create the main component file (e.g., `ComponentName.tsx`) in the appropriate directory (e.g., `libs/scope/feature-name/src/components/ComponentName/ComponentName.tsx`).
   -  **Tool Guide:**  
      This step will likely involve using a file writing tool.

---

## 2. Use the React Functional Component Basic Snippet

**Paste the following code as the initial template for your component:**

```tsx
import { observer } from 'mobx-react'
import React from 'react'

interface Props {

}

const ${TM_FILENAME_BASE} = (props: Props): React.ReactElement => {
   const {  } = props

   return ${TM_FILENAME_BASE}
}

export default observer(${TM_FILENAME_BASE})
```

-  Replace `${TM_FILENAME_BASE}` with your actual component name.

---

## 3. Guidelines

-  **No Index Files:**  
   Do **not** generate `index.ts` or `index.tsx` files for the sole purpose of re-exporting the component.

-  **Semantic HTML:**  
   Use semantic HTML5 elements (e.g., `<p>`, `<h1>`, `<img>`) wherever possible and meaningful.

-  **No Comments:**  
   Do not add comments within the generated code.

-  **Props Interface:**  
   The props interface for a component should be named using PascalCase, following the pattern `Props`.

-  **Path Conventions for Imports:**
   -  **Relative Paths:**  
      For imports from files within the same component directory (e.g., `./styles`, `./types`) or closely related modules within the same library (e.g., `../hooks/useCustomHook`), use relative paths.
      -  Example:
         ```tsx
         import * as Styles from './styles'
         ```
   -  **Absolute Paths (Package/Lib Paths):**  
      For imports from other libraries/packages, **you must use the path alias defined in the `paths` object of `tsconfig.base.json`**. Do not use relative paths that traverse out of the `libs` directory (e.g., `../../../`).
      -  Example:  
         To import `Card`, look up its package in `tsconfig.base.json` (e.g., `"@hive-frontend/design-system": ["libs/design-system/src/index.ts"]`) and then use the alias:
         ```tsx
         import { Card } from '@hive-frontend/design-system'
         ```

---

## 4. Internationalization (i18n)

-  **Hook Usage:**
   To use translations, import and use the `useCustomT` hook.

   ```tsx
   import { useCustomT } from '@hive/hooks'

   const t = useCustomT('namespace:key')
   ```

-  **Namespace and Key:**

   -  `namespace`: Corresponds to the translation filename (e.g., `dayPlan` for `dayPlan.json`).
   -  `key`: A top-level key within the JSON file that groups related translations. The `t` function will be scoped to this key.

-  **Translation Files:**
   -  All translation files are located in `apps/hive/src/assets/i18n/translations/en/`.
   -  To add a new translation, find the appropriate JSON file (or create one if it doesn't exist for the feature) and add a new key-value pair under the correct scope.

---

## 5. Styling Conventions

-  **Style File:**
   Create a `styles.tsx` file for component-specific styles.

-  **Exporting Styles:**
   Styles should be exported as constants representing Tailwind CSS class name strings. Do **not** use `styled-components` or other CSS-in-JS libraries.

   _Example `styles.tsx`:_

   ```tsx
   export const containerClassName = `flex flex-col items-center`
   export const titleClassName = `text-lg-semibold text-gray-900`
   ```

-  **Importing Styles:**
   Import all styles from the `styles.tsx` file using a lowercase namespace import. Do **not** include the file extension.

   _Example `Component.tsx`:_

   ```tsx
   import * as styles from './styles'
   ```

-  **Using Semantic Tokens:**
   The project's Tailwind config uses semantic tokens for spacing (e.g., `p-md`, `m-lg`), rounding (`rounded-md`), and other properties. **Always prefer these tokens over numeric utilities.**

   -  **Correct Usage:**

      ```tsx
      export const headerClassName = `flex items-center justify-between p-md`
      export const menuButtonClassName = `rounded-lg p-xxs`
      ```

   -  **Incorrect Usage:**
      Avoid numeric utilities like `p-4` or `rounded-xl` unless there is no corresponding semantic token. Never invent class names like `p-spacing-md`.

---

## 6. Handling Reusable/Existing Components

-  **Identify:**  
   During Figma data analysis, identify if parts of the design map to existing reusable components (e.g., from `@hive-frontend/design-system`).

-  **Action:**
   -  **Use Existing Component:**  
      Import and use the existing component, ensuring all required props are passed correctly based on the component's definition.
   -  **No Styles:**  
      **Do not** generate or add any new styles for these reusable components in the current component's `styles.tsx`. Their styling is self-contained.
   -  **Log:**  
      Output a message:
      ```
      Detected reusable component: '' from 'package-name'. Styles will not be generated for it locally.
      ```

---
