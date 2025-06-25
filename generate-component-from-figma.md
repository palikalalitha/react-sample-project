---
description: Generate a React component from a Figma design, enforcing project standards.
---

This workflow automates the creation of React components from Figma designs by following a series of sub-workflows.

## Inputs

This workflow requires the following inputs:

-  **`<figma-file-link>`**: The link to the Figma frame or component.
-  **`<Component Purpose>`**: A brief description of the component's purpose (e.g., "Primary Button for authentication forms").
-  **`<Target Directory>`**: The path in the codebase where the component should be created (e.g., `libs/hive/ui/src/components/buttons`).
-  **`<i18n File>`** (Optional): The path to the file where i18n (internationalization) keys and values should be written.
-  **`<Additional Context>`** (Optional): Any additional information about common or reusable components to reference during generation.

## Workflow Steps

### 1. Extract Figma Data

-  **Action:** Use the Figma MCP to extract design data (layout, styles, assets) from the provided **`<figma-file-link>`**.
   -  Consider using tools like `mcp0_get_figma_data` or `mcp0_analyze_figma_components`.
-  **Critical Check:**
   -  **Wait** for the data extraction process to complete.
   -  **If successful:** Proceed to the next step.
   -  **If an error occurs:** **STOP** the workflow and report the error.

### 2. Create Component File

-  **Action:** Follow the steps outlined in the `/create-react-component` workflow to generate the component's `.tsx` file in the **`<Target Directory>`**.
-  **Inputs:**
   -  The Figma data from Step 1.
   -  The **`<Component Purpose>`** to add relevant comments or documentation.
   -  The **`<i18n File>`** path for any text that needs internationalization (if provided).
   -  The **`<Additional Context>`** for handling reusable components (if provided).

### 3. Create Style File

-  **Action:** Follow the steps outlined in the `/generate-styles-from-figma` workflow to generate the component's `styles.tsx` file in the **`<Target Directory>`**.
-  **Input:** The Figma data from Step 1.
