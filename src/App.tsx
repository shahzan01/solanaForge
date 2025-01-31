import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

import { TokenBalance } from "./components/TokenBalance";
import { CreateTokenForm } from "./components/CreateTokenForm";
import { TransferForm } from "./components/TransferToken";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useSetRecoilState } from "recoil";
import { walletBalanceAtom } from "./atoms";
import { useEffect } from "react";
import Account from "./components/Account";
import { Header } from "./components/Header";
import { toast } from "react-hot-toast";

export default function Home() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const setWalletBalance = useSetRecoilState(walletBalanceAtom);

  useEffect(() => {
    const toastid = toast.loading("Loading...");
    const fetchBalance = async () => {
      if (wallet.publicKey) {
        try {
          const walletBalance =
            (await connection.getBalance(wallet.publicKey)) / 1000000000;
          setWalletBalance(walletBalance);
        } catch (err) {
          console.error(err);
        }
      } else {
        setWalletBalance(0);
      }
    };
    toast.dismiss(toastid);
    fetchBalance();
  }, [connection, setWalletBalance, wallet]);

  return (
    <>
      <Header></Header>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <main className="container relative mx-auto p-6 max-sm:py-6 max-sm:px-2">
          <div className="flex flex-col gap-8">
            <section className="text-center space-y-4 pt-12 pb-8">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                SolanaForge
              </h1>
              <p className="mx-auto max-w-[48rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Experience the next-generation Solana wallet adapter, designed
                to effortlessly manage your SOL and tokens with unparalleled
                ease and efficiency.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/token"></a>
              </div>
            </section>

            <Account />

            <Tabs defaultValue="balance" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                <TabsTrigger value="balance">Token Balance</TabsTrigger>
                <TabsTrigger value="transfer">Transfer</TabsTrigger>
                <TabsTrigger value="create">Create Token</TabsTrigger>
              </TabsList>
              <TabsContent value="balance" className="space-y-4">
                <TokenBalance />
              </TabsContent>
              <TabsContent value="transfer">
                <TransferForm />
              </TabsContent>
              <TabsContent value="create">
                <CreateTokenForm />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </>
  );
}
