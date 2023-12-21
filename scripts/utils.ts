import isEqual from "lodash/isEqual"
import mapValues from "lodash/mapValues"
import { Spec } from "./base-spec"

/*
 * Tries to merge objects, if there's conflicting properties it will throw
 */
export const mergeWithoutConflict = (first: any, second: any) => {
    for (const key of Object.keys(first)) {
        if (second[key] && !isEqual(first[key], second[key])) {
            throw new Error('Conflict: ' + key)
        }
    }
    return {
        ...first,
        ...second,
    }
}

/*
 * Will make sure that the links point to developer portal
 */
export const fixDescriptionLinks = (spec: Spec) => {
    spec.paths = mapValues(spec.paths, (path) => {
        return mapValues(path, (method) => {
            if (!method.description) return method
            // correct
            method.description = method.description
                .replace(/target="_?blank"/gi, 'target=_blank')
                .replace(/href="([a-z/]+)"/gi, 'href=https://developers.miro.com$1')
            return method
        })
    })
    return spec
}

/*
 * Code generator does not support multiple tags since we have a single file for all tags
 */
export const removeMultipleTagsFromEndpoints = (spec: Spec) => {
    Object.keys(spec.paths).forEach((path) => {
        const endpoint = spec.paths[path]
        Object.keys(endpoint).forEach((method) => {
            endpoint[method].tags = endpoint[method].tags?.slice(0, 1)
        })
    })
}