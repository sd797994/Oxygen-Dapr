export function isHidden(element) {
  return window.getComputedStyle(element).display === 'none' || element.offsetParent === null;
}