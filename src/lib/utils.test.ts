import { sortObjectByKey } from "./utils";

describe("utils", () => {
    describe("sortObjectByKey()", () => {
        test("sorts a simple object with numbers as keys", () => {
            expect(
                sortObjectByKey({
                    "1": "one",
                    "0": "zero",
                    "2": "two"
                })
            ).toEqual({
                "0": "zero",
                "1": "one",
                "2": "two"
            });
        });
        test("sorts a simple object with strings as keys", () => {
            expect(
                sortObjectByKey({
                    bruno: "mars",
                    marshall: "mathers",
                    lex: "fridman"
                })
            ).toEqual({
                bruno: "mars",
                lex: "fridman",
                marshall: "mathers"
            });
        });
    });
});
