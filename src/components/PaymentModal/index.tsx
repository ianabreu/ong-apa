import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Toaster } from "@/components/ui/toaster";

import { Button } from "../ui/button";
import QRCode from "react-qr-code";
import { useToast } from "@/components/ui/use-toast";

import { Icon, IconProps } from "@/constants/icons";
import Image from "next/image";

import caixa from "@/assets/banks/caixa.svg";
import nubank from "@/assets/banks/nubank.svg";
import PaymentContainer from "./paymentContainer";
import { TableAccounts } from "./TableAccounts";

interface DoantionPageProps {
  qrCode: string;

  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export default function DoantionPage({
  qrCode,
  isOpen,
  setIsOpen,
}: DoantionPageProps) {
  const { toast } = useToast();

  const onOpenModal = () => setIsOpen(true);
  const onCloseModal = () => setIsOpen(false);

  return (
    <Modal
      open={isOpen}
      onClose={onCloseModal}
      center
      styles={{
        modal: {
          borderRadius: 8,
          margin: 0,
          width: "100%",
          height: "95%",
          position: "relative",
          overflow: "hidden",
        },
      }}
    >
      <div className="sticky top-0  h-10 w-full bg-white">
        <h2 className="border-b-2 border-primary_green_light pb-2 text-center text-xl font-bold">
          Formas de Contribuição
        </h2>
      </div>

      <div className="flex h-[95%] w-full flex-1 flex-col overflow-y-scroll">
        <PaymentContainer icon="pix" title="PIX — Pagamentos Instantâneos">
          <div className="mx-auto my-8 w-full max-w-60 rounded-lg border border-primary_black">
            {qrCode && (
              <QRCode
                size={256}
                className="h-auto max-h-full w-full p-4"
                value={qrCode}
                viewBox={`0 0 256 256`}
              />
            )}
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-center text-lg font-bold">
              Use o QR Code do Pix para doar
            </span>
            <span className="max-w-80 text-center text-sm">
              Abra o app em que vai fazer a transferência, escaneie a imagem ou
              cole o código do QR Code
            </span>
            <Button
              className="w-full gap-2"
              onClick={() => {
                navigator.clipboard.writeText(qrCode);
                toast({
                  title: "Código PIX copiado com sucesso!",
                  variant: "destructive",
                  duration: 4000,
                  className:
                    "text-primary_white border-none bg-secondary_red h-8 z-50",
                });
              }}
            >
              Copiar QR Code {Icon("copy")}
            </Button>
          </div>
        </PaymentContainer>

        <PaymentContainer title="Depósito Bancário" icon="money">
          <div className="my-4 flex  flex-1 flex-col items-center gap-1 text-lg text-primary_black">
            <div className="aspect-square max-h-20 overflow-hidden rounded-lg">
              <Image
                src={caixa}
                alt="Logo do Banco"
                quality={70}
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <TableAccounts
              accounts={[
                { data: "1054", header: "Agência" },
                { data: "000801954634-9", header: "Conta" },
                { data: "Poupança", header: "Tipo" },
                { data: "104 - Caixa Econômica Federal", header: "Banco" },
              ]}
            />
          </div>

          <div className="my-4 flex  flex-1 flex-col items-center gap-1 text-lg text-primary_black">
            <div className="aspect-square max-h-20 overflow-hidden rounded-lg">
              <Image
                src={nubank}
                alt="Logo do Banco"
                quality={70}
                width={0}
                height={0}
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <TableAccounts
              accounts={[
                { data: "1054", header: "Agência" },
                { data: "000801954634-9", header: "Conta" },
                { data: "Poupança", header: "Tipo" },
                { data: "104 - Caixa Econômica Federal", header: "Banco" },
              ]}
            />
          </div>
        </PaymentContainer>
      </div>
      <Toaster />
    </Modal>
  );
}
