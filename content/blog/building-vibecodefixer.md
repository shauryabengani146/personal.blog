---
title: "VibeCodeFixer — A VS Code Extension for Precise Manual Edits"
date: "2026-07-15"
description: "How I built Pinpoint (VibeCodeFixer) — a VS Code extension that lets you apply deterministic CSS tweaks like color, padding, and margin changes to any selection, no LLM required."
tags: ["TypeScript", "VS Code", "Developer Tools", "Extension"]
---

# VibeCodeFixer (Pinpoint) — Surgical Code Editing for VS Code

There's a class of edits that AI is overkill for — changing a hex color, adjusting a padding value, toggling a CSS property. **Pinpoint** (published as VibeCodeFixer) is a VS Code extension that handles exactly these: precise, deterministic text edits on a selection, invoked in seconds.

## The Motivation

When "vibe coding" a UI, I found myself repeatedly doing the same manual micro-edits: hunt for a color value, triple-click to select it, type a new one. Pinpoint collapses this to a single keyboard shortcut.

## How It Works

The core flow is simple:

1. Select some text in the editor
2. Press `Ctrl+Alt+P` (or `Cmd+Alt+P` on Mac), or right-click → **Pinpoint: Start Manual Edit**
3. Pick an action from the QuickPick dropdown
4. Pinpoint produces `vscode.TextEdit[]` and applies them atomically

```typescript
// extension.ts — the command wiring
vscode.commands.registerCommand("pinpoint.startSelection", async () => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const context: EditContext = {
    selection: editor.selection,
    selectedText: editor.document.getText(editor.selection),
    document: editor.document,
  };

  const action = await pickAction(); // QuickPick
  if (!action) return;

  const result = await action.execute(context);
  const edit = new vscode.WorkspaceEdit();
  edit.set(editor.document.uri, result.edits);
  await vscode.workspace.applyEdit(edit);
});
```

## Extensible by Design

Adding a new edit action means dropping a file in `src/editActions/actions/` and registering it in `registry.ts` — nothing else to touch.

```typescript
// registry.ts
import { changeTextColor } from "./actions/changeTextColor";

export const editActions: EditAction[] = [
  changeTextColor,
  // add your action here
];
```

Each action implements a minimal contract:

```typescript
interface EditAction {
  label: string;
  description?: string;
  execute(context: EditContext): Promise<EditResult>;
}
```

## Key Takeaways

- **`vscode.workspace.applyEdit`** is atomic — either all edits go through or none do, which is exactly what you want for safe transforms
- **QuickPick** is far more ergonomic than modal dialogs for action selection
- Keeping the extension **zero-dependency** keeps startup time under 5ms

Try it on [GitHub](https://github.com/shauryabengani146/vibecodefixer).
