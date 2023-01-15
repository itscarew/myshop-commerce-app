export function numberWithCommas(x: number = 0) {
  return Number(x).toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });
}
