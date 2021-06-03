function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(searchTerm);
    });
  }
  
  describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, url: "https://github.com/Ethan1498" },
        { id: 2, url: "https://github.com/Ethan1498?tab=projects" },
        { id: 3, url: "https://github.com/Ethan1498?tab=repositories" }
      ];
  
      const output = [{ id: 3, url: "https://github.com/Ethan1498?tab=repositories" }];
  
      expect(filterByTerm(input, "repositories")).toEqual(output);
    });
  });