document
  .querySelector("button.btn-confetti")
  .addEventListener("click", showConfetti);

document
  .querySelector("button.btn-cysm")
  .addEventListener("click", canYouSeeMe);

export async function showConfetti() {
  console.log("showing confetti...");
  const { default: confetti } = await import(
    `https://cdn.skypack.dev/-/canvas-confetti@v1.3.3-ySRaL53MTwssL5KYsZu8/dist=es2020/canvas-confetti.js`
  );

  confetti();
}

export async function canYouSeeMe() {
  console.log("showing can_you_see_me");
  const { canYouSeeMe } = await import("./eventlisteners.js");
  canYouSeeMe();
}
