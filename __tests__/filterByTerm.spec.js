function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(function(arrayElement) {
        return arrayElement.name.match(searchTerm);
    });
}

describe("Filter Function", () => {
    test("it should filter by a search term (name)", () => {
        const input = [
            {id: 1, name: "Bob"},
            {id: 2, name: "John"},
            {id: 3, name: "Elliot"}
        ];

        const output = [{ id: 3, name: "Elliot" }];

        expect(filterByTerm(input, "name")).toEqual(output);
    });
});