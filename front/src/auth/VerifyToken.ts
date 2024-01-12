export function setKey (chave: string, valor: string) {
  localStorage.setItem(chave, valor)
}

export function VerifyToken (chave: string) {
  if (chave === 'TESTE') {
    return true
  } else {
    return false
  }
}
