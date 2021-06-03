const filterByTerm = require("../src/filterByTerm");
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
    test("it should filter by a search term (github)", () => {
        const input = [
            { id: 1, url: "https://github.com/Ethan1498" },
            { id: 2, url: "https://github.com/Ethan1498?tab=projects" },
        ];

        const output = [
            { id: 1, url: "https://github.com/Ethan1498" },
            { id: 2, url: "https://github.com/Ethan1498?tab=projects" },
        ];

        expect(filterByTerm(input, "github")).toEqual(output);
    });
    test("it should throw when searchTerm is empty string", () => {
        const input = [];
        expect(() => {
            filterByTerm(input, "");
        }).toThrowError(Error("searchTerm cannot be empty"));
    });
});