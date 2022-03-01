import { readFile } from "fs/promises";

const raw = JSON.parse(
  await readFile(new URL("./draft.json", import.meta.url))
);

const formatted = raw.map(element => {
  let withoutBreakLines = element.description.split("\n");
  let withoutExtraSpace = withoutBreakLines.map(string => string.trim());
  let withoutEmptySpace = withoutExtraSpace.filter(string =>
    string.length ? true : false
  );
  let removeDuplicate = withoutEmptySpace.slice(1);
  return { word: element.word, definition: removeDuplicate };
});

function getWordsByLength(words, number) {
  return words.filter(element =>
    element.word.length == number ? element : false
  );
}

const dictionary = getWordsByLength(formatted, 5);
console.log(dictionary);
