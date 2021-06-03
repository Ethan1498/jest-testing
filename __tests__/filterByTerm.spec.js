describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://github.com/Ethan1498" },
            { id: 2, url: "https://github.com/Ethan1498?tab=projects" },
            { id: 3, url: "https://github.com/Ethan1498?tab=repositories" }
        ];
  
      const output = [{ id: 3, url: "https://github.com/Ethan1498?tab=repositories" }];
  
      expect(filterByTerm(input, "repositories")).toEqual(output); // Searches the const for the word repositories, will pass test
      
      expect(filterByTerm(input, "REPOSITORIES")).toEqual(output); // this will fail test, as its searching for uppercaes

    });
});

function filterByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    });
}