import { CardHelper } from "./CardHelper";

type HelperSectionProps = {
  openModal: (isOpen: boolean) => void;
};
export function HelperSection(props: HelperSectionProps) {
  return (
    <div className="grid w-screen grid-cols-1 justify-stretch sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
      <CardHelper
        title="Faça uma Doação e Seja um Herói para os Animais!"
        content="Sua doação faz toda a diferença! Ajude-nos a proteger e cuidar dos nossos amigos peludos. Juntos, podemos fazer um mundo melhor para os animais."
        onClick={() => props.openModal(true)}
        bgImage="bg-donation"
        btnText="Quero Doar"
      />
      <CardHelper
        title="Torne-se um Anjo Protetor! Seja uma madrinha ou padrinho"
        content="Com uma doação mensal, você ajuda a garantir que os animais resgatados recebam cuidados essenciais. Junte-se a nós nessa jornada de amor e proteção."
        bgImage="bg-patronize"
        isLink
        href={
          "https://wa.me/5577999824116?text=Quero%20apadrinhar%20um%20pet%20"
        }
        hasIcon
      />
      <CardHelper
        title="Adote um Animal! Adotar transforma vidas."
        content="Candidate-se para a adoção responsável e faça parte dessa jornada de carinho e companheirismo."
        bgImage="bg-adopt"
        isLink
        href={"https://wa.me/5577999824116?text=Quero%20adotar%20um%20pet%20"}
        hasIcon
      />
    </div>
  );
}
