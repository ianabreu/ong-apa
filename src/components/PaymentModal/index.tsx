import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import QRCode from "react-qr-code";
import { useToast } from "@/components/ui/use-toast";

import { Accordion } from "@/components/ui/accordion";
import Item from "./item";
import { Icon } from "@/constants/icons";

interface PaymentPageProps {
  buttonTitle?: string;
}
export default function PaymentPage({
  buttonTitle = "Doe agora",
}: PaymentPageProps) {
  const { toast } = useToast();
  const qrcode =
    "00020126580014BR.GOV.BCB.PIX01363c4dd96a-3467-4b95-b8e5-914809fe97fd5204000053039865802BR5925Ian Paixao Pereira de Abr6009SAO PAULO621405103rCpixAe8763044408";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>{buttonTitle}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Formas de Contribuição</DialogTitle>
        </DialogHeader>

        <Accordion
          type="single"
          collapsible
          defaultValue="pix"
          contentEditable={false}
          draggable={false}
        >
          <Item value="pix" title="PIX — Pagamentos Instantâneos" icon={"pix"}>
            <div className="mx-auto my-8 w-full max-w-60 rounded-lg border-2 border-primary_green_dark">
              <QRCode
                size={256}
                className="h-auto max-h-full w-full p-4"
                value={qrcode}
                viewBox={`0 0 256 256`}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <span className="text-center text-lg font-bold">
                Use o QR Code do Pix para doar
              </span>
              <span className="text-center text-sm">
                Abra o app em que vai fazer a transferência, escaneie a imagem
                ou cole o código do QR Code
              </span>
              <Button
                className="w-full gap-2"
                onClick={() => {
                  navigator.clipboard.writeText(qrcode);
                  toast({
                    title: "Código PIX copiado com sucesso!",
                    variant: "destructive",
                    duration: 4000,
                    className:
                      "text-primary_white border-none bg-secondary_red h-8",
                  });
                }}
              >
                Copiar QR Code {Icon("copy")}
              </Button>
            </div>
          </Item>
          <Item value="deposito" title="Depósito Bancário" icon={"money"}>
            <p>Agencia: 1054</p>
            <p>Conta: 000801954634-9</p>
            <p>Tipo: Poupança</p>
          </Item>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
}
