// イベント層 (main.ts)
// クリックされた時の処理とボタンを結びつける。
// おみくじ箱を用意し、ボタンのクリックで reset / draw を呼び、結果を描画層に渡す。
// この層は完成済み（ステップ1で render.ts を実装すれば動く）。

import { resetOmikuji, drawOmikuji, getRemainingCount } from "./omikuji";
import { renderResult, renderRemaining } from "./render";

function main(): void {
  // おみくじ箱を用意する
  resetOmikuji();

  const drawButton = document.getElementById("draw-button");
  const resetButton = document.getElementById("reset-button");

  // 画面を開いた時の初期表示（残り枚数を画面に出す）
  renderRemaining(getRemainingCount());

  drawButton?.addEventListener("click", () => {
    const result = drawOmikuji();

    renderResult(result);
    // 引いたあとに残り枚数を更新
    renderRemaining(getRemainingCount());
  });

  resetButton?.addEventListener("click", () => {
    resetOmikuji();
    renderResult(null);
    // リセットしたあとに残り枚数を更新
    renderRemaining(getRemainingCount());
  });
}

main();
