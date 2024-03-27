import { Button } from "../ui/button";
export function Hero() {
  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen max-h-[700px] bg-black bg-hero bg-cover bg-right"
    >
      <div className="flex flex-col justify-center text-white p-4 sm:pl-10 gap-2 w-full max-w-[1200px] ">
        <p className="uppercase text-xl font-bold select-none">
          Os animais precisam de
        </p>
        <h1 className="text-5xl font-black select-none">SUA AJUDA!</h1>
        <p className="text-xl select-none max-w-96">
          Você pode contribuir com dinheiro e voluntariado! Adote um animal de
          estimação!
        </p>
        <div className="flex pt-6">
          <Button
            variant={"default"}
            className="border-2  hover:bg-transparent hover:border-primary hover:text-primary text-foreground border-primary duration-500"
          >
            Adote um bichinho
          </Button>
        </div>
      </div>
    </section>
  );
}
