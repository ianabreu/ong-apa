import { CardHelper } from "./CardHelper";

type HelperSectionProps = {};
export function HelperSection({}: HelperSectionProps) {
  return (
    <div className="grid w-screen grid-cols-1 justify-stretch sm:grid-cols-2 md:grid-cols-3">
      <CardHelper
        title="Faça uma Doação e Seja um Herói para os Animais!"
        content="🐾 Sua doação faz toda a diferença! Ajude-nos a proteger e cuidar dos nossos amigos peludos. Juntos, podemos fazer um mundo melhor para os animais. 🌟🐶🐱"
        onClick={() => alert("Clicou 1")}
        bgImage="bg-donation"
      />
      <CardHelper
        title="Torne-se um Anjo Protetor! Seja uma madrinha ou padrinho"
        content="🐾 Com uma doação mensal, você ajuda a garantir que os animais resgatados recebam cuidados essenciais. Junte-se a nós nessa jornada de amor e proteção. 🌟🐶🐱"
        onClick={() => alert("Clicou 2")}
        bgImage="bg-patronize"
      />
      <CardHelper
        title="Adote um Animal! Cada adoção é uma história de amor que transforma vidas."
        content="🐾 Candidate-se para a adoção responsável e faça parte dessa jornada de carinho e companheirismo. 🌟🐶🐱"
        onClick={() => alert("Clicou 3")}
        bgImage="bg-adopt"
      />
    </div>
  );
}
