import { useState } from "react";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import { Input } from "./components/ui/input";

type Item = { id: string; name: string; quantity: string };

function App() {
  const [text, setText] = useState(() => {
    const stored = localStorage.getItem("einkaufsliste_form");
    if (!stored) return "";
    try {
      return (JSON.parse(stored).text as string) ?? "";
    } catch {
      return "";
    }
  });

  const [quantity, setQuantity] = useState(() => {
    const stored = localStorage.getItem("einkaufsliste_form");
    if (!stored) return "1";
    try {
      return (JSON.parse(stored).quantity as string) ?? "1";
    } catch {
      return "1";
    }
  });
  const [items, setItems] = useState<Item[]>(() => {
    const stored = localStorage.getItem("einkaufsliste_items");
    if (!stored) return [];
    try {
      const parsed = JSON.parse(stored) as Item[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const isAddDisabled = text.trim().length === 0;
  const handleAddClick = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const isDuplicate = items.some(
      (item) => item.name.toLowerCase() === trimmed.toLowerCase()
    );
    if (isDuplicate) {
      toast("Du hast das schon eingegeben.");
      return;
    }
    const next = [
      ...items,
      { id: String(Date.now()), name: trimmed, quantity },
    ];
    localStorage.setItem("einkaufsliste_items", JSON.stringify(next));
    localStorage.setItem(
      "einkaufsliste_form",
      JSON.stringify({ text: trimmed, quantity })
    );
    setItems(next);
    setText("");
    setQuantity("1");
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
        <h1 className="font-bold text-center mt-15 text-3xl mb-10 ">
          Einkaufsliste
        </h1>
        <div className="flex items-center gap-2 w-90 border-input h-10">
          <Input
            className="border-gray-200 flex-1"
            placeholder="Produkt eingeben..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></Input>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-15 border-gray-200 px-3 ml-auto"
          ></Input>
        </div>

        <div>
          <Button
            className="flex text-white cursor-pointer bg-gray-500 flex-col w-90 justify-center items-center mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isAddDisabled}
            onClick={handleAddClick}
          >
            Eintrag hinzuf�gen
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-6 items-center justify-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl w-90 border bg-card text-card-foreground shadow p-6 flex justify-between items-center"
          >
            <div>
              <p className="text-lg">{item.name}</p>
              <p className="text-xs">Anzal: {item.quantity}</p>
            </div>

            <div>
              <Button className="inline-flex w-34 bg-white text-gray-700 border-2 cursor-pointer border-gray-300 hover:bg-gray-100">
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
                  className="lucide lucide-check-icon lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>{" "}
                Abhaken
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
