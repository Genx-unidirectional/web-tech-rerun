//Normal array//

const testArr1: string[] = ["tim"];
const testArr2: [string, boolean, number] = ["tim", false, 34];
function testArray(arr: (string | number)[]) {}
//making tuple

function textArray2(arr: [string, number]) {}

function testArray3(arr: ReadonlyArray<string>) {}
function testArray4(arr: readonly string[]) {}
