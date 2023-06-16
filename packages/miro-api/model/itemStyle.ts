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

import {AppCardStyle} from './appCardStyle'
import {CardStyle} from './cardStyle'
import {ShapeStyle} from './shapeStyle'
import {StickyNoteStyle} from './stickyNoteStyle'
import {TextStyle} from './textStyle'

/**
 * @internal
 * Contains information about item-specific styles.
 */
export class ItemStyle {
  /**
   * Background color of the text item. Default: `#ffffff`.
   */
  'fillColor'?: string
  /**
   * Hex value of the border color of the card. Default: `#2d9bf0`.
   */
  'cardTheme'?: string
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
  'borderStyle'?: string | (typeof ItemStyle.BorderStyleEnum)[keyof typeof ItemStyle.BorderStyleEnum]
  /**
   * Defines the thickness of the shape border, in dp. Default: `2.0`.
   */
  'borderWidth'?: string
  /**
   * Hex value representing the color for the text within the text item. Default: `#1a1a1a`.
   */
  'color'?: string
  /**
   * Opacity level of the background color. Possible values: any number between `0.0` and `1.0`, where: `0.0`: the background color is completely transparent or invisible. `1.0`: the background color is completely opaque or solid. Default: `1.0` if `fillColor` is provided, `0.0` if `fillColor` is not provided.
   */
  'fillOpacity'?: string
  /**
   * Font type for the text in the text item. Default: `arial`.
   */
  'fontFamily'?: string | (typeof ItemStyle.FontFamilyEnum)[keyof typeof ItemStyle.FontFamilyEnum]
  /**
   * Font size, in dp. Default: `14`.
   */
  'fontSize'?: string
  /**
   * Horizontal alignment for the item\'s content. Default: `center.`
   */
  'textAlign'?: string | (typeof ItemStyle.TextAlignEnum)[keyof typeof ItemStyle.TextAlignEnum]
  /**
   * Defines how the sticky note text is vertically aligned. Default: `top`.
   */
  'textAlignVertical'?: string | (typeof ItemStyle.TextAlignVerticalEnum)[keyof typeof ItemStyle.TextAlignVerticalEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'fillColor',
      baseName: 'fillColor',
      type: 'string',
    },
    {
      name: 'cardTheme',
      baseName: 'cardTheme',
      type: 'string',
    },
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
      type: 'ItemStyle.BorderStyleEnum',
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
      name: 'fillOpacity',
      baseName: 'fillOpacity',
      type: 'string',
    },
    {
      name: 'fontFamily',
      baseName: 'fontFamily',
      type: 'ItemStyle.FontFamilyEnum',
    },
    {
      name: 'fontSize',
      baseName: 'fontSize',
      type: 'string',
    },
    {
      name: 'textAlign',
      baseName: 'textAlign',
      type: 'ItemStyle.TextAlignEnum',
    },
    {
      name: 'textAlignVertical',
      baseName: 'textAlignVertical',
      type: 'ItemStyle.TextAlignVerticalEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ItemStyle.attributeTypeMap
  }
}

export namespace ItemStyle {
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
