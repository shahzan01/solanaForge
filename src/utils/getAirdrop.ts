import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { SetterOrUpdater } from "recoil";
import { useToast } from "../hooks/use-toast";
import { constants } from "buffer";
import { VideoOff } from "lucide-react";

export const getAirdrop = async (
  publicKey: PublicKey | null,
  connection: Connection,
  setWalletBalance: SetterOrUpdater<number>,
  toast: ({}) => void
) => {
  try {
    if (!publicKey) {
      toast({
        variant: "destructive",
        title: "Uh oh! Wallet Not Connected",
        description: ``,
      });
      return null;
    }
    const airDropResult = await connection.requestAirdrop(
      publicKey,
      5 * LAMPORTS_PER_SOL
    );
    const status = (await connection.getSignatureStatus(airDropResult)).value;

    const totalBalance = (await connection.getBalance(publicKey)) / 1000000000;
    setWalletBalance(totalBalance);
    toast({
      variant: "default",
      title: "Airdrop Successfull ",
      description: `Airdroped 5 SOL to ${publicKey}`,
    });
    return true;
  } catch (error) {
    toast({
      variant: "destructive",
      title: "Uh oh! Airdrop Failed ",
      description: `Limit reached `,
    });

    return false;
  }
};
