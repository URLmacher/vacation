export class ColorHelper {
  getColor(cssName: string): string {
    return getComputedStyle(window.document.body).getPropertyValue(cssName);
  }
}