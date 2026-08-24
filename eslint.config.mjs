import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// eslint-config-next@15 ne fournit ses règles qu'au format "eslintrc"
// classique (pas encore au format "flat config" natif). FlatCompat sert
// de pont pour pouvoir l'utiliser malgré tout avec ESLint 9.
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Ignorés par défaut par eslint-config-next ; à répéter ici car
    // FlatCompat ne les reprend pas automatiquement.
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
