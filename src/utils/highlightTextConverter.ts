/**
 * Convert text from highlight api
 * @param text - Text to be converted
 * @returns Converted text
 */

export function highlightTextConverter(text: string): string {
  switch (text) {
    case "alert":
      return "* Meta longe de ser atingida";
    case "success":
      return "* A meta do mês foi atingida! Parabéns!";
    case "warning":
      return "* Falta pouco para atingir a meta, vamos lá!";
    default:
      return "* Sem dados no momento";
  }
}
