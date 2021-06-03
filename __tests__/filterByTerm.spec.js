describe("Filter Function", () => {
    // tests here
    test("it should filter by a search term (name)", () => {
        // actual tests
        const input = [
            {id: 1, name: "Bob"},
            {id: 2, name: "John"},
            {id: 3, name: "Elliot"}
        ];

        const output = [{ id: 3, name: "Elliot"}];

        expect(filterByTerm(input, "name")).toEqual(output);
    });
});