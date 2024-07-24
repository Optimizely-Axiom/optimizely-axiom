// eslint-disable-next-line local/no-global-styles
import { style } from "@vanilla-extract/css";

import { layers, theme } from "../styles";
import { recipe } from "../vanilla-extract";

export const box = recipe({
  base: style({
    "@layer": {
      [layers.reset]: {
        border: `0 solid ${theme.colors["border.default"]}`,
        boxSizing: "border-box",
        fontFamily: theme.fontFamily.sans,
        fontFeatureSettings: '"cv02", "cv03", "cv04"',
        margin: 0,
        padding: 0,
        selectors: {
          "&:focus-visible": {
            vars: {
              "--tw-ring-offset-width": "0",
            },
          },

          /**
           * 1. Add the correct height in Firefox.
           * 2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
           * 3. Ensure horizontal rules are visible by default.
           */
          "&:is(hr)": {
            borderTopWidth: "1px" /* 3 */,
            color: "inherit" /* 2 */,
            height: 0 /* 1 */,
          },

          /**
           * Remove the default font size and weight for headings.
           */
          "&:is(h1, h2, h3, h4, h5, h6)": {
            fontSize: "inherit",
            fontWeight: "inherit",
          },

          /**
           * Add the correct font weight in Edge and Safari.
           */
          "&:is(b, strong)": {
            fontWeight: "bolder",
          },

          /**
           * 1. Use the user's configured `mono` font-family by default.
           * 2. Use the user's configured `mono` font-feature-settings by default.
           * 4. Correct the odd `em` font sizing in all browsers.
           */
          "&:is(code, kbd, samp, pre)": {
            fontFamily: theme.fontFamily.mono /* 1 */,
            fontFeatureSettings: "normal" /* 2 */,
            fontSize: "1em" /* 4 */,
          },

          /**
           * 1. Change the font styles in all browsers.
           */
          "&:is(button, input, optgroup, select, textarea)": {
            color: "inherit" /* 1 */,
            fontSize: "100%" /* 1 */,
            letterSpacing: "inherit" /* 1 */,
          },

          /**
           * 1. Correct the inability to style clickable types in iOS and Safari.
           * 2. Remove default button styles.
           */
          "&:is(button, input:where([type=button], [type=reset], [type=submit]))":
            {
              WebkitAppearance: "button",
              backgroundColor: "transparent" /* 2 */,
              backgroundImage: "none" /* 2 */,
            },

          /**
           * 1. Correct the odd appearance in Chrome and Safari.
           * 2. Correct the outline style in Safari.
           */
          "&:is([type=search])": {
            WebkitAppearance: "textfield" /* 1 */,
            outlineOffset: "-2px" /* 2 */,
          },

          /**
           * 1. Correct the inability to style clickable types in iOS and Safari.
           * 2. Change font properties to `inherit` in Safari.
           */
          "&::-webkit-file-upload-button": {
            WebkitAppearance: "button" /* 1 */,
            font: "inherit" /* 2 */,
          },

          "&:is(ol, ul, menu)": {
            listStyle: "none",
          },

          "&:is(textarea)": {
            resize: "vertical",
          },

          /**
           * 1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
           * 2. Set the default placeholder color to the user's configured gray 400 color.
           */
          "&:is(input, textarea)::placeholder": {
            color: theme.colors["neutral.600"] /* 2 */,
            opacity: 1 /* 1 */,
          },

          ...{
            /**
             * Set the default cursor for buttons.
             */
            "&:is(button, [role=button])": {
              cursor: "pointer",
            },
          },

          /**
           * Make sure disabled buttons don't get the pointer cursor.
           */
          "&:is(:disabled)": {
            cursor: "default",
          },

          "&::-webkit-search-decoration": {
            WebkitAppearance: "none",
          },

          "&::-webkit-search-cancel-button": {
            WebkitAppearance: "none",
          },

          /**
           * Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
           */
          "&:is(img, svg, video, canvas, audio, iframe, embed, object)": {
            display: "block",
          },

          /**
           * Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
           */
          "&:is(img, video)": {
            height: "auto",
            maxWidth: "100%",
          },

          "&:is(select)": {
            appearance: "none",
          },
        },
      },
    },
  }),
});
