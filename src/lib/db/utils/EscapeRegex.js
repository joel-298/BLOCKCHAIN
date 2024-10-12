/**
 * @param {string} text
 * @returns A Regex Expression
 */
export default function EscapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
