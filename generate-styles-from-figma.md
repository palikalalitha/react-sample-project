---
description: Creates a styles.tsx file for a component based on Figma data and project-specific token mapping rules.
---

## Workflow Steps

### 1. Create the Styles File

-  **Action:**  
   Create a `styles.tsx` file for the component (e.g., `libs/scope/feature-name/src/components/ComponentName/styles.tsx`).
   -  **Tool Guide:**  
      This step will likely involve using a file writing tool.

---

### 2. Import Styles in the Component

-  In the component file (`ComponentName.tsx`), import the Styles as:
   ```typescript
   import * as Styles from './styles'
   ```

---

### 3. Structure and Grouping

-  **Structure Example:**

   ```typescript
   // libs/scope/feature-name/src/components/ComponentName/styles.tsx

   // Example: Tailwind utility strings and group similar styles
   export const containerClassName = `
     flex flex-col items-center
     p-xl m-lg
   `

   export const titleClassName = `
     text-sm-regular text-primary-900
   `

   // Add other style groups (layout, specific elements, etc.)
   ```

-  **Exports:**  
   Export styles as named constants:

   ```typescript
   export const myElementClassName = `
     flex flex-col items-center
     pb-xl pb-lg
   `
   ```

-  **Styling Library:**  
   Use **Tailwind**. This is the project standard.

---

### 4. classNameSuffix

-  **Always add `classNameSuffix`**.  
   The generation process should append a component-specific suffix to the class name strings to aid in style uniqueness:
   ```typescript
   export const containerClassName = `
     flex flex-col items-center
     p-xl m-lg
   `
   ```

## Style Generation Logic

### Typography Style Generation

-  **For each text element identified in Figma:**

   1. **Extract:**

      -  Font size (e.g., `"16px"`)
      -  Font weight (e.g., `"700"`, `"bold"`)

   2. **Search Token:**

      -  Check `libs/design-system/tailwind.config.js` for a matching semantic token (e.g., `text-sm-regular`).
      -  **Tool Guide:** This may involve reading and parsing the Tailwind config.

   3. **Mapping:**
      -  **If found:**  
         Use the Tailwind semantic class (e.g., `text-sm-regular`).
      -  **If NOT found:**
         -  **Log:**  
            Output:
            ```
            NO MAPPING TOKEN FOUND for typography: figma-font-size='[value]', figma-font-weight='[value]'. User guidance needed.
            ```
         -  Await user guidance.
      -  **No Arbitrary Values:**  
         Never use arbitrary Tailwind values for typography (e.g., `text-[15.5px]`) if a semantic token is expected.
      -  **No Split Classes:**  
         Do not split typography into separate classes (e.g., `text-base` and `font-bold`) if a combined semantic token (like `text-base-bold`) exists.
      -  **Documentation:**  
         Log all typography mapping decisions.

---

### Space Style Generation (Padding, Margin, Gap, etc.)

-  **Use semantic tokens** for clarity and maintainability.

   1. **Search Semantic Token:**

      -  Check `libs/design-system/generated_tailwind_config.js` for a matching semantic token (e.g., `p-sm`, `m-lg`).
      -  **Tool Guide:** This may involve reading and parsing the Tailwind config.

   2. **For each space value identified in Figma:**

      -  | Token Example | Type                | Common Name           |
         | ------------- | ------------------- | --------------------- |
         | `0: '0px'`    | Numeric/Scale-based | Numeric design token  |
         | `none: '0px'` | Semantic/Named      | Semantic design token |

   3. **Mapping:**
      -  **If found:**  
         Use the Tailwind semantic class (e.g., `p-xl`).
      -  **If NOT found:**  
         Use the Tailwind JIT mode with square braces and the exact value from Figma (e.g., `p-[54px]`). This should be a last resort, and a warning should be logged.

-  **Token Preference:**
   Always prefer semantic tokens (e.g., `p-md`) over numeric utilities (e.g., `p-4`).

   -  **Correct Usage:**

      ```tsx
      export const headerClassName = `flex items-center justify-between p-md`
      export const menuButtonClassName = `rounded-lg p-xxs`
      ```

   -  **Incorrect Usage:**
      Avoid numeric utilities like `p-4` or `rounded-4` if a corresponding semantic token exists. Never invent class names like `p-spacing-md`.

-  **Preference:**  
   Always prefer semantic tokens.

-  **Documentation:**  
   Log all spacing mapping decisions.
