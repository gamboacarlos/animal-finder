export const createUrlFromText = (text: string) => {
  return `https://${text.toLowerCase().replace(/\s+/g, "")}.org`
}

export const formatTextWithEllipsis = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
}
