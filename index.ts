import { FeatureHashes } from "./enum";

export function getEnum() {
    return {
        actions: FeatureHashes.ACTIONS_DETECTION,
        errors: FeatureHashes.ERRORS_DETECTION,
        fetch: FeatureHashes.FETCH_DETECTION
    }
}