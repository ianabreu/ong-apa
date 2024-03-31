interface OurNumbersItemProps {
  valor: string;
  descricao: string;
}
export function OurNumbersItem({ valor, descricao }: OurNumbersItemProps) {
  return (
    <div className="rounded-lg border-2 border-primary_white bg-primary_white px-2 py-4 text-center shadow-lg hover:border-2 hover:border-primary_green_dark">
      <h4 className="text-3xl font-bold text-primary_green_dark duration-500 sm:text-5xl">
        {valor}
      </h4>
      <span className="text-sm font-bold text-primary_black duration-500 sm:text-lg">
        {descricao}
      </span>
    </div>
  );
}
