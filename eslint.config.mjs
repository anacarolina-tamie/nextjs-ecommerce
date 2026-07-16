import rocketseat from "@rocketseat/eslint-config/eslint.config.js";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  // Aplica as configurações da Rocketseat (que já incluem React e TS)
  ...rocketseat,

  // Configurações personalizadas (Ignores e sobrescritas de regras)
  {
    ignores: [
      ".next/*",
      "out/*",
      "build/*",
      "next-env.d.ts",
      "node_modules/*",
      "dist/*",
    ],
    rules: {
      // Se precisar customizar alguma regra específica, adicione aqui.
      // Exemplo: "no-console": "warn",
    },
  },
];

export default eslintConfig;