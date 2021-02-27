import * as monaco from "monaco-editor-core";
import { languageExtensionPoint, languageID } from "./config";

export function setupLanguage() {
    monaco.languages.register(languageExtensionPoint);
    monaco.languages.onLanguage(languageID, () => {
    });
}