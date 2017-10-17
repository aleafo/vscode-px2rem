import * as vscode from 'vscode';
import { CssRemProcess } from "./process";

export class CssRemProvider implements vscode.CompletionItemProvider {

    constructor(private process: CssRemProcess) { }

    provideCompletionItems (document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.CompletionItem[]> {

        return new Promise((resolve, reject) => {
            const lineText = document.getText(new vscode.Range(position.with(undefined, 0), position));
            const res = this.process.convert(lineText);
            if (!res) {
                return resolve([]);
            }         
            
            //增加菜单
            const item = new vscode.CompletionItem(`${res.pxValue}px -> ${res.rem}`, vscode.CompletionItemKind.Snippet);
            item.insertText = res.rem;
            item.sortText = '1';

            //再增加一个菜单
            const item2 = new vscode.CompletionItem(`${res.pxValue}px -> ${res.rem2}`, vscode.CompletionItemKind.Snippet);
            item2.insertText = res.rem2;
            item2.sortText = '2';

            return resolve([item, item2]);

        });
    }
}