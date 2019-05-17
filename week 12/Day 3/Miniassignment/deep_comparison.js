function deepCompare(o1, o2) {
  if (o1 === o2) return true;
  if (
    o1 == null ||
    typeof o1 !== "object" ||
    o2 == null ||
    typeof o2 !== "object"
  )
    return false;
  let keys1 = Object.keys(o1);
  let keys2 = Object.keys(o2);
  if (keys1.length != keys2.length) return false;
  for (let key in keys1) {
    if (!(key in keys2) || !deepCompare(o1[key], o2[key])) return false;
  }
  return true;
}

//TEST

if (deepCompare(1, 1)) console.log("Success 1");

if (!deepCompare(1, "1")) console.log("Success 2");

if (!deepCompare(null, undefined)) console.log("Success 3");

if (deepCompare(null, null)) console.log("Success 4");

if (deepCompare(undefined, undefined)) console.log("Success 5");

var o1, o2;
o1 = { name: "Joe", surname: "Smith" };
o2 = { name: "Joe", surname: "Smith" };
if (deepCompare(o1, o2)) console.log("Success 6");
o1 = { name: "Joe", surname: "Smith" };
o2 = { surname: "Smith", name: "Joe" };
if (deepCompare(o1, o2)) console.log("Success 7");

o1 = { name: "Joe", surname: "Smith" };
o2 = { name: "Joe" };
if (!deepCompare(o1, o2)) console.log("Success 8");
if (!deepCompare(o2, o1)) console.log("Success 9");

o1 = [1, 2, null, undefined, { name: "Joe" }];
o2 = [1, 2, null, undefined];
if (!deepCompare(o1, o2)) console.log("Success 10");

o2.push({ name: "Joe" });
if (deepCompare(o1, o2)) console.log("Success 11");

o1 = [1, 2, 3];
o2 = [1, 3, 2];
if (!deepCompare(o1, o2)) console.log("Success 12");
