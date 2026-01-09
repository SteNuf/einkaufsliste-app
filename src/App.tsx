import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  return (
    <>
      <div id="root">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="font-bold text-center mt-15 text-3xl mb-10 ">
            Einkaufsliste
          </h1>
          <div className="flex items-center gap-2 w-100 border-input h-10">
            <Input
              className="border-gray-200 flex-1"
              placeholder="Produkt eingeben..."
            ></Input>
            <Input
              type="number"
              className="w-15 border-gray-200 px-3 ml-auto"
            ></Input>
          </div>

          <div>
            <Button className="flex text-white bg-gray-500 flex-col w-100 justify-center items-center mt-3">
              Eintrag hinzufügen
            </Button>
          </div>
        </div>

        <div className="flex flex-col w-full gap-2 mt-6">
          <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex justify-between items-center">
            <div>
              <p className="text-lg">Käse</p>
              <p className="text-xs">Anzal: 1</p>
            </div>

            <div>
              <Button className="inline-flex">Abhaken</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-2 mt-6">
          <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex justify-between items-center">
            <div>
              <p className="text-lg">Eier</p>
              <p className="text-xs">Anzal: 4</p>
            </div>

            <div>
              <Button className="inline-flex">Abhaken</Button>
            </div>
          </div>

          <div className="flex flex-col w-full gap-2 mt-6">
            <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex justify-between items-center">
              <div>
                <p className="text-lg">Wasser</p>
                <p className="text-xs">Anzal: 1</p>
              </div>

              <div>
                <Button className="inline-flex">Abhaken</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
