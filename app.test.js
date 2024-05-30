const { test, expect } = require("@jest/globals");
const {slugs} = require("./posts.js")
const {createSlug} = require("./app.js")

test("La funzione dovrebbe ritornare una stringa", () => {
    const slug = createSlug("s", slugs);

    expect(typeof slug).toBe("string");
});

test("La funzione dovrebbe ritornare una stringa in lowercase", () => {
    const slug = createSlug("Esercizio", slugs)

    expect(slug).toBe(slug.toLowerCase())
})

test("La funzione dovrebbe ritornare una stringa con gli spazi sostituiti da -", () => {
    const slug = createSlug("Nuovo test ", slugs)

    expect(slug.includes(" ")).toBe(false)
})

test("La funzione dovrebbe incrementare di 1 lo slug quando esiste già", () => {
    const slug = createSlug("Nuovo Test", slugs)

    expect(slugs.includes(slug)).toBe(false);
})

test("La funzione dovrebbe lanciare un errore in caso di titolo non presente o formato errato", () => {

    expect(() => createSlug(5, slugs)).toThrow("Il titolo non può essere vuoto");
})

test("La funzione dovrebbe lanciare un errore se manca l'array dei post", () => {

    expect(() => createSlug("Ciao a tutti", "s")).toThrow("Il secondo argomento deve essere un array");
})