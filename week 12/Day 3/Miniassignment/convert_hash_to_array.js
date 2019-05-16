function convertHashToArray(hash) {
  var keys = Object.keys(hash).sort();
  var arr = [];
  var con = 0;
  for (let key of keys) {
    arr[con] = [key, hash[key]];
    con++;
  }
  return arr;
}

//TEST

if (
  JSON.stringify(convertHashToArray({ name: "Jeremy" })) ==
  JSON.stringify([["name", "Jeremy"]])
)
  console.log("Success");

if (
  JSON.stringify(convertHashToArray({ name: "Jeremy", age: 24 })) ==
  JSON.stringify([["age", 24], ["name", "Jeremy"]])
)
  console.log("Success");

if (
  JSON.stringify(
    convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
  ) ==
  JSON.stringify([
    ["age", 24],
    ["name", "Jeremy"],
    ["role", "Software Engineer"]
  ])
)
  console.log("Success");

if (
  JSON.stringify(
    convertHashToArray({ product: "CodeWars", powerLevelOver: 9000 })
  ) == JSON.stringify([["powerLevelOver", 9000], ["product", "CodeWars"]])
)
  console.log("Success");

if (JSON.stringify(convertHashToArray({})) == JSON.stringify([]))
  console.log("Success");
