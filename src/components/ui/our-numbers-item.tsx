interface OurNumbersItemProps {
  valor: string;
  descricao: string;
}
export function OurNumbersItem({ valor, descricao }: OurNumbersItemProps) {
  return (
    <div className="p-4  text-center">
      <h4 className="font-bold text-5xl text-primary">{valor}</h4>
      <span className="text-foreground text-base font-bold">{descricao}</span>
    </div>
  );
}
