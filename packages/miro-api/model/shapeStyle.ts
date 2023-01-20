/**
 * Miro API
 * Miro API
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @internal
 * For information about the JSON properties, see [Style](https://developers.miro.com/reference/style).
 */
export class ShapeStyle {
  /**
   * Defines the color of the border of the shape. Default: `#1a1a1a` (dark gray).
   */
  'borderColor'?: string
  /**
   * Defines the opacity level of the shape border. Possible values: any number between `0.0` and `1.0`, where: `0.0`: the background color is completely transparent or invisible `1.0`: the background color is completely opaque or solid Default: `1.0` (solid color).
   */
  'borderOpacity'?: string
  /**
   * Defines the style used to represent the border of the shape. Default: `normal`.
   */
  'borderStyle'?: string | (typeof ShapeStyle.BorderStyleEnum)[keyof typeof ShapeStyle.BorderStyleEnum]
  /**
   * Defines the thickness of the shape border, in dp. Default: `2.0`.
   */
  'borderWidth'?: string
  /**
   * Hex value representing the color for the text within the shape item. Default: `#1a1a1a`.
   */
  'color'?: string
  /**
   * Fill color for the shape. Hex values: `#f5f6f8` `#d5f692` `#d0e17a` `#93d275` `#67c6c0` `#23bfe7` `#a6ccf5` `#7b92ff` `#fff9b1` `#f5d128` `#ff9d48` `#f16c7f` `#ea94bb` `#ffcee0` `#b384bb` `#000000` Default: #ffffff.
   */
  'fillColor'?: string
  /**
   * Opacity level of the fill color. Possible values: any number between `0` and `1`, where: `0.0`: the background color is completely transparent or invisible `1.0`: the background color is completely opaque or solid Default: `1.0` if `fillColor` provided, `0.0` if no `fillColor` provided.
   */
  'fillOpacity'?: string
  /**
   * Defines the font type for the text in the shape item. Default: `arial`.
   */
  'fontFamily'?: string | (typeof ShapeStyle.FontFamilyEnum)[keyof typeof ShapeStyle.FontFamilyEnum]
  /**
   * Defines the font size, in dp, for the text on the shape. Default: `14`.
   */
  'fontSize'?: string
  /**
   * Defines how the sticky note text is horizontally aligned. Default: `center`.
   */
  'textAlign'?: string | (typeof ShapeStyle.TextAlignEnum)[keyof typeof ShapeStyle.TextAlignEnum]
  /**
   * Defines how the sticky note text is vertically aligned. Default: `top`.
   */
  'textAlignVertical'?:
    | string
    | (typeof ShapeStyle.TextAlignVerticalEnum)[keyof typeof ShapeStyle.TextAlignVerticalEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'borderColor',
      baseName: 'borderColor',
      type: 'string',
    },
    {
      name: 'borderOpacity',
      baseName: 'borderOpacity',
      type: 'string',
    },
    {
      name: 'borderStyle',
      baseName: 'borderStyle',
      type: 'ShapeStyle.BorderStyleEnum',
    },
    {
      name: 'borderWidth',
      baseName: 'borderWidth',
      type: 'string',
    },
    {
      name: 'color',
      baseName: 'color',
      type: 'string',
    },
    {
      name: 'fillColor',
      baseName: 'fillColor',
      type: 'string',
    },
    {
      name: 'fillOpacity',
      baseName: 'fillOpacity',
      type: 'string',
    },
    {
      name: 'fontFamily',
      baseName: 'fontFamily',
      type: 'ShapeStyle.FontFamilyEnum',
    },
    {
      name: 'fontSize',
      baseName: 'fontSize',
      type: 'string',
    },
    {
      name: 'textAlign',
      baseName: 'textAlign',
      type: 'ShapeStyle.TextAlignEnum',
    },
    {
      name: 'textAlignVertical',
      baseName: 'textAlignVertical',
      type: 'ShapeStyle.TextAlignVerticalEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ShapeStyle.attributeTypeMap
  }
}

export namespace ShapeStyle {
  export const BorderStyleEnum = {
    Normal: 'normal',
    Dotted: 'dotted',
    Dashed: 'dashed',
  } as const
  export const FontFamilyEnum = {
    Arial: 'arial',
    AbrilFatface: 'abril_fatface',
    Bangers: 'bangers',
    EbGaramond: 'eb_garamond',
    Georgia: 'georgia',
    Graduate: 'graduate',
    GravitasOne: 'gravitas_one',
    FredokaOne: 'fredoka_one',
    NixieOne: 'nixie_one',
    OpenSans: 'open_sans',
    PermanentMarker: 'permanent_marker',
    PtSans: 'pt_sans',
    PtSansNarrow: 'pt_sans_narrow',
    PtSerif: 'pt_serif',
    RammettoOne: 'rammetto_one',
    Roboto: 'roboto',
    RobotoCondensed: 'roboto_condensed',
    RobotoSlab: 'roboto_slab',
    Caveat: 'caveat',
    TimesNewRoman: 'times_new_roman',
    TitanOne: 'titan_one',
    LemonTuesday: 'lemon_tuesday',
    RobotoMono: 'roboto_mono',
    NotoSans: 'noto_sans',
    PlexSans: 'plex_sans',
    PlexSerif: 'plex_serif',
    PlexMono: 'plex_mono',
    Spoof: 'spoof',
    TiemposText: 'tiempos_text',
    Formular: 'formular',
  } as const
  export const TextAlignEnum = {
    Left: 'left',
    Right: 'right',
    Center: 'center',
  } as const
  export const TextAlignVerticalEnum = {
    Top: 'top',
    Middle: 'middle',
    Bottom: 'bottom',
  } as const
}
