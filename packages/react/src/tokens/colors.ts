const colorPalette = {
  current: "currentColor" as const,
  transparent: "transparent" as const,

  black: "#000000" as const,
  white: "#FFFFFF" as const,

  "aqua.50": "#E5F7FB" as const,
  "aqua.200": "#9AE5EF" as const,
  "aqua.500": "#00BDD6" as const,
  "aqua.600": "#007A8A" as const,

  "blue.50": "#E7F3FE" as const,
  "blue.200": "#A8D5FA" as const,
  "blue.500": "#2094F3" as const,
  "blue.600": "#1668AC" as const,
  "blue.900": "#1C2B41" as const,

  "brand.50": "#F0F3FF" as const,
  "brand.100": "#CDD8FC" as const,
  "brand.200": "#B3C3FF" as const,
  "brand.300": "#6A8FFC" as const,
  "brand.400": "#2E66F7" as const,
  "brand.500": "#0037FF" as const,
  "brand.600": "#002CCC" as const,
  "brand.700": "#002894" as const,
  "brand.800": "#001666" as const,
  "brand.900": "#000B33" as const,

  "dark.50": "#d9d9d9" as const,
  "dark.200": "#9e9e9e" as const,
  "dark.500": "#707070" as const,
  "dark.600": "#080736" as const,

  "gray.50": "#f9fafb" as const,
  "gray.100": "#f3f4f6" as const,
  "gray.200": "#e5e7eb" as const,
  "gray.300": "#d1d5db" as const,
  "gray.400": "#9ca3af" as const,
  "gray.500": "#6b7280" as const,
  "gray.600": "#4b5563" as const,
  "gray.700": "#374151" as const,
  "gray.800": "#1f2937" as const,
  "gray.900": "#111827" as const,

  "green.50": "#E9F7F1" as const,
  "green.100": "#D1F0E1" as const,
  "green.200": "#A5E1C3" as const,
  "green.300": "#7CD2A7" as const,
  "green.400": "#5AC58A" as const,
  "green.500": "#03A65D" as const,
  "green.600": "#038047" as const,
  "green.700": "#24663E" as const,
  "green.800": "#17492B" as const,
  "green.900": "#082415" as const,

  "magenta.50": "#F8E7F5" as const,
  "magenta.200": "#E39CD6" as const,
  "magenta.500": "#B80597" as const,
  "magenta.600": "#81046A" as const,

  "neutral.50": "#F9FAFC" as const,
  "neutral.75": "#F5F6FA" as const,
  "neutral.100": "#E9EDF5" as const,
  "neutral.150": "#DADFEB" as const,
  "neutral.200": "#CACFDC" as const,
  "neutral.500": "#868FA4" as const,
  "neutral.600": "#626A81" as const,
  "neutral.700": "#464D61" as const,
  "neutral.800": "#303645" as const,
  "neutral.900": "#262B37" as const,
  "neutral.1000": "#1C2029" as const,
  "neutral.1100": "#171A23" as const,

  "orange.50": "#fff5e5" as const,
  "orange.200": "#ffd699" as const,
  "orange.500": "#ff9900" as const,
  "orange.600": "#a36200" as const,

  "purple.50": "#F1ECF8" as const,
  "purple.200": "#C4B1E2" as const,
  "purple.500": "#693AB6" as const,
  "purple.600": "#4A297F" as const,
  "purple.900": "#2B273F" as const,

  "red.50": "#FFF7F7" as const,
  "red.100": "#FCD6D6" as const,
  "red.200": "#F9ACAC" as const,
  "red.300": "#F45959" as const,
  "red.400": "#E31818" as const,
  "red.500": "#CC1616" as const,
  "red.600": "#B21313" as const,
  "red.700": "#911D1D" as const,
  "red.800": "#601313" as const,
  "red.900": "#300A0A" as const,

  "slate.50": "#f8fafc" as const,
  "slate.100": "#f1f5f9" as const,
  "slate.200": "#e2e8f0" as const,
  "slate.300": "#cbd5e1" as const,
  "slate.400": "#94a3b8" as const,
  "slate.500": "#64748b" as const,
  "slate.600": "#475569" as const,
  "slate.700": "#334155" as const,
  "slate.800": "#1e293b" as const,
  "slate.900": "#0f172a" as const,
  "slate.950": "#020617" as const,

  "yellow.50": "#FFFAEA" as const,
  "yellow.100": "#FEF1C6" as const,
  "yellow.200": "#FEDF88" as const,
  "yellow.300": "#FFC84B" as const,
  "yellow.400": "#FDB022" as const,
  "yellow.500": "#F79008" as const,
  "yellow.600": "#DC6903" as const,
  "yellow.700": "#B54707" as const,
  "yellow.800": "#7A2E0D" as const,
  "yellow.900": "#4E1D09" as const,
} as const;

export const colors = {
  ...colorPalette,

  "bg.brand.solid": colorPalette["brand.500"],
  "bg.brand.solid.hover": colorPalette["brand.600"],
  "bg.brand.subtle": colorPalette["brand.50"],
  "bg.default.hover": colorPalette["neutral.75"],
  "bg.disabled": colorPalette["neutral.50"],
  "bg.discovery": colorPalette["purple.50"],
  "bg.error.solid": colorPalette["red.500"],
  "bg.error.solid.hover": colorPalette["red.600"],
  "bg.error.subtle": colorPalette["red.50"],
  "bg.information": colorPalette["blue.50"],
  "bg.neutral": colorPalette["slate.100"],
  "bg.secondary.hover": colorPalette["neutral.100"],
  "bg.success": colorPalette["green.50"],
  "bg.success.solid": colorPalette["green.500"],
  "bg.success.solid.hover": colorPalette["green.600"],
  "bg.success.subtle": colorPalette["green.50"],
  "bg.warning.solid": colorPalette["yellow.500"],
  "bg.warning.solid.hover": colorPalette["yellow.600"],
  "bg.warning.subtle": colorPalette["yellow.50"],

  "border.brand": colorPalette["brand.500"],
  "border.default": colorPalette["neutral.200"],
  "border.disabled": colorPalette["neutral.75"],
  "border.error": colorPalette["red.500"],
  "border.outline": colorPalette["brand.300"],
  "border.secondary": colorPalette["neutral.150"],
  "border.success": colorPalette["green.500"],
  "border.tertiary": colorPalette["neutral.100"],
  "border.warning": colorPalette["yellow.500"],

  "fg.accent.blue": colorPalette["blue.500"],
  "fg.accent.magenta": colorPalette["magenta.600"],
  "fg.accent.purple": colorPalette["purple.600"],
  /**
   * Primary brand color useful for accented text, highlights, and subheadings
   */
  "fg.brand": colorPalette["brand.500"],
  /**
   * Primary brand color when in hover state
   */
  "fg.brand.hover": colorPalette["brand.600"],
  /**
   * Primary text color for page headings
   */
  "fg.default": colorPalette["neutral.900"],
  /**
   * Primary text color when in hover state
   */
  "fg.default.hover": colorPalette["neutral.1000"],
  /**
   * Primary text color when used on solid color bg
   */
  "fg.default.inverse": colorPalette["white"],
  /**
   * Disabled text color for more subtle, lower-contrast, and non-interactive text
   */
  "fg.disabled": colorPalette["neutral.500"],
  /**
   * Error text color for danger and error states
   */
  "fg.error": colorPalette["red.500"],
  /**
   * Error text color when in hover state
   */
  "fg.error.hover": colorPalette["red.600"],
  /**
   * Secondary text color for labels and section headings
   */
  "fg.secondary": colorPalette["neutral.700"],
  /**
   * Secondary text color when in hover state
   */
  "fg.secondary.hover": colorPalette["neutral.800"],
  /**
   * Success text color
   */
  "fg.success": colorPalette["green.600"],
  /**
   * Success text color when in hover state
   */
  "fg.success.hover": colorPalette["green.600"],
  /**
   * Tertiary text color for supporting, paragraph, and placeholder text
   */
  "fg.tertiary": colorPalette["neutral.600"],
  /**
   * Tertiary text color when in hover state
   */
  "fg.tertiary.hover": colorPalette["neutral.700"],
  /**
   * Warning text color
   */
  "fg.warning": colorPalette["yellow.500"],
  /**
   * Warning text color when in hover state
   */
  "fg.warning.hover": colorPalette["yellow.600"],

  surface: colorPalette["white"],
} as const;

export const colorsDark = {
  ...colorPalette,
  "bg.brand.solid": colorPalette["brand.500"],
  "bg.brand.solid.hover": colorPalette["brand.600"],
  "bg.brand.subtle": colorPalette["brand.50"],
  "bg.default.hover": colorPalette["neutral.75"],
  "bg.disabled": colorPalette["neutral.1000"],
  "bg.discovery": colorPalette["purple.900"],
  "bg.error.solid": colorPalette["red.500"],
  "bg.error.solid.hover": colorPalette["red.600"],
  "bg.error.subtle": colorPalette["red.50"],
  "bg.information": colorPalette["blue.900"],
  "bg.neutral": colorPalette["slate.800"],
  "bg.secondary.hover": colorPalette["neutral.100"],
  "bg.success": colorPalette["green.900"],
  "bg.success.solid": colorPalette["green.500"],
  "bg.success.solid.hover": colorPalette["green.600"],
  "bg.success.subtle": colorPalette["green.50"],
  "bg.warning.solid": colorPalette["yellow.500"],
  "bg.warning.solid.hover": colorPalette["yellow.600"],
  "bg.warning.subtle": colorPalette["yellow.50"],

  "border.brand": colorPalette["brand.500"],
  "border.default": colorPalette["gray.800"],
  "border.disabled": colorPalette["neutral.75"],
  "border.error": colorPalette["red.500"],
  "border.outline": colorPalette["brand.300"],
  "border.secondary": colorPalette["neutral.150"],
  "border.success": colorPalette["green.500"],
  "border.tertiary": colorPalette["neutral.900"],
  "border.warning": colorPalette["yellow.500"],

  "fg.accent.blue": colorPalette["blue.200"],
  "fg.accent.magenta": colorPalette["magenta.200"],
  "fg.accent.purple": colorPalette["purple.200"],
  "fg.brand": colorPalette["brand.500"],
  "fg.brand.hover": colorPalette["brand.600"],
  "fg.default": colorPalette["gray.100"],
  "fg.default.hover": colorPalette["neutral.1000"],
  "fg.default.inverse": colorPalette["white"],
  "fg.disabled": colorPalette["neutral.500"],
  "fg.error": colorPalette["red.500"],
  "fg.error.hover": colorPalette["red.600"],
  "fg.secondary": colorPalette["slate.400"],
  "fg.secondary.hover": colorPalette["neutral.800"],
  "fg.success": colorPalette["green.200"],
  "fg.success.hover": colorPalette["green.600"],
  "fg.tertiary": colorPalette["neutral.600"],
  "fg.tertiary.hover": colorPalette["neutral.700"],
  "fg.warning": colorPalette["yellow.500"],
  "fg.warning.hover": colorPalette["yellow.600"],

  surface: colorPalette["gray.900"],
} as const;
