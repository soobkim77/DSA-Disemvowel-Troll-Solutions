function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

{/* 
1.Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Used REGEX on a string to strip it of any vowels. REGEX inside of a replace, takes in array of values, [a,e,i,o,u], then replaces it with non-space to remove the letter completely





*/}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
      assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
      assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
      })
})