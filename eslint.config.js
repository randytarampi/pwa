import packageConfig from "./packages/asset-generator/eslint.config.js";

export default [
    {
        ignores: [
            ".yarn/**",
            "**/node_modules/**",
            "**/coverage/**",
            "**/.gradle/**",
            "**/build/**",
            "**/dist/**",
            "**/.nx/**"
        ]
    },
    ...packageConfig,
    {
        files: [
            "packages/android-icon-resize/bin/*.js",
            "packages/android-icons/bin/*.js",
            "packages/android-splash/bin/*.js",
            "packages/ios-icons/bin/*.js",
            "packages/ios-splash/bin/*.js"
        ],
        rules: {
            "import/no-unresolved": "off"
        }
    },
    {
        rules: {
            indent: "off",
            quotes: "off",
            semi: "off"
        }
    }
];
