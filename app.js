const raw = require("./draft.json");

const formatted = raw.map(element => {
  let withoutBreakLines = element.description.split("\n");
  let withoutExtraSpace = withoutBreakLines.map(string => string.trim());
  let withoutEmptySpace = withoutExtraSpace.filter(string =>
    string.length ? true : false
  );
  let removeDuplicate = withoutEmptySpace.slice(1);
  return { word: element.word, definition: removeDuplicate };
});
