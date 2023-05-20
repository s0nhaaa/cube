export const truncatePubkey = (pubkey: string, length = 4) => {
  const firstFour = pubkey.substring(0, length)
  const lastFour = pubkey.substring(pubkey.length - length)

  return `${firstFour}...${lastFour}`
}
