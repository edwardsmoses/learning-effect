import { Console, Effect } from "effect";

const fetchRequest = Effect.tryPromise(() =>
  fetch("https://pokeapi.co/api/v2/pokemon/garchomp/")
);

const jsonResponse = (response: Response) =>
  Effect.tryPromise(() => response.json());

const logJson = (val: any) => Console.log(val);

const main = Effect.flatMap(fetchRequest, (response) =>
  Effect.flatMap(jsonResponse(response), logJson)
);

Effect.runPromise(main);
