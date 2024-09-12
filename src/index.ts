import { Console, Effect } from "effect";

const fetchRequest = Effect.promise(() =>
  fetch("https://pokeapi.co/api/v2/pokemon/garchomp/")
);

const jsonResponse = (response: Response) =>
  Effect.promise(() => response.json());

const main = Effect.flatMap(
  fetchRequest,
  (response) =>
    Effect.flatMap(jsonResponse(response), (jsonVal) => Console.log(jsonVal))
);

Effect.runPromise(main);
