import { Console, Effect, pipe } from "effect";

const fetchRequest = Effect.tryPromise(() =>
  fetch("https://pokeapi.co/api/v2/pokemon/garchomp/")
);

const jsonResponse = (response: Response) =>
  Effect.tryPromise(() => response.json());

const logJson = (val: any) => {
  Console.log(val);
  return val 
};

const savePokemon = (pokemon: unknown) => Effect.tryPromise(() => fetch("https://pokeapi.co/api/pokemon", {
  body: JSON.stringify(pokemon)
}))

const main = pipe(fetchRequest, 
  Effect.flatMap(jsonResponse),
  Effect.flatMap(savePokemon), 
);

Effect.runPromise(main);
