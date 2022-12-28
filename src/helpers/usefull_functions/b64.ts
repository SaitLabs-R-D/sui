export function b64EncodeUnicode(str: string) {
  return btoa(encodeURIComponent(str));
}

export function UnicodeDecodeB64(str: string) {
  try {
    return decodeURIComponent(atob(str));
  } catch {
    return "{}";
  }
}

function parse(str: string = "{}") {
  return JSON.parse(UnicodeDecodeB64(str));
}
function stringify(obj: any = {}) {
  return b64EncodeUnicode(JSON.stringify(obj));
}

export const pipes = {
  parse,
  stringify,
};
