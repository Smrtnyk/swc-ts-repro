import { getEnum } from ".";

it("reads enum", () => {
    expect(getEnum()).toStrictEqual({
      actions: "1" /* FeatureHashes.ACTIONS_DETECTION */,
      errors: "2" /* FeatureHashes.ERRORS_DETECTION */,
      fetch: "8" /* FeatureHashes.FETCH_DETECTION */
    });
});
