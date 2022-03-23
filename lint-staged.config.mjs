export default {
  // Fix staged .{ts,tsx} files via ESLint & Typecheck all .{ts,tsx} files via TypeScript
  "*.{ts,tsx}": (files) =>
    `eslint --fix ${files.join(" ")}` &&
    `"tsc -p tsconfig.json --pretty --noEmit"`,
  // Pretty staged files
  "*": (files) => `prettier --ignore-unknown --write ${files.join(" ")}`,
};
