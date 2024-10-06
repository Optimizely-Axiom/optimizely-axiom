// eslint-disable-next-line local/no-global-styles
import { generateIdentifier, globalLayer } from "@vanilla-extract/css";

export const axiom = "optiaxiom";
export const base = `${axiom}.base`;
export const reset = `${axiom}.${generateIdentifier()}`;
export const components = `${axiom}.${generateIdentifier()}`;

globalLayer([axiom, base, reset, components].join(", "));
