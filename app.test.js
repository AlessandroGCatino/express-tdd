const { test, expect } = require("@jest/globals");

const {createSlug} = require("./app.js")

test("La funzione dovrebbe ritornare una stringa", () => {
    const slug = createSlug("s", "s");

    expect(typeof slug).toBe("string");
});