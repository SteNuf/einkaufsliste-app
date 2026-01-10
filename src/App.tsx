import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Trash2 } from "lucide-react";

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
            <Button className="flex text-white bg-gray-400 flex-col w-100 justify-center items-center mt-3">
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
              <Button className="inline-flex bg-white text-grey-400 border-2 border-grey-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>{" "}
                Abhaken
              </Button>
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
              <Button className="inline-flex  bg-white text-grey-400 border-2 border-grey-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Abhaken
              </Button>
            </div>
          </div>

          <div className="flex flex-col w-full gap-2 mt-6">
            <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex justify-between items-center">
              <div>
                <p className="text-lg">Wasser</p>
                <p className="text-xs">Anzal: 1</p>
              </div>

              <div>
                <Button className="inline-flex  bg-white text-grey-400 border-2 border-grey-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check-icon lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Abhaken
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-2 mt-6">
            <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex justify-between items-center">
              <div>
                <p className="text-lg line-through">Käse</p>
                <p className="text-xs">Anzal: 1</p>
              </div>

              <div>
                <Trash2 className="h-8 w-8 bg-red-500 fill-red-500 text-white "></Trash2>

                <Button className="inline-flex text-grey-400 border-2 border-gray-400 bg-gray-200 border-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-undo2-icon lucide-undo-2"
                  >
                    <path d="M9 14 4 9l5-5" />
                    <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
                  </svg>
                  Zurück
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
