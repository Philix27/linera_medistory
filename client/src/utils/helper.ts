import { BigNumber, ethers } from "ethers";

export function formatWalletAddress(addr: string): string {
  if (addr === undefined) {
    return "0.00";
  }
  return `${addr.substring(0, 4)}...${addr.substring(38)}`;
}

export function formatAmount(amount: BigNumber, unit: number): string{
  return ethers.utils.formatUnits(amount, unit).toString();
}