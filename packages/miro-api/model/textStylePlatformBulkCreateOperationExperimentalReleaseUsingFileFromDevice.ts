/**
 * Miro Developer Platform
 * <img src=\"https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n\" width=\"1685\" height=\"593\">  ### Miro Developer Platform concepts  - New to the Miro Developer Platform? Interested in learning more about platform concepts?? [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.   ### Getting started with the Miro REST API  - [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes. - [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.   ### Miro REST API tutorials  Check out our how-to articles with step-by-step instructions and code examples so you can:  - [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)   ### Miro App Examples  Clone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro\'s Developer Platform 2.0.
 *
 * The version of the OpenAPI document: v2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @internal
 * Contains information about the style of a text item, such as the fill color or font family.
 */
export class TextStylePlatformBulkCreateOperationExperimentalReleaseUsingFileFromDevice {
  /**
   * Hex value representing the color for the text within the text item. Default: `#1a1a1a`.
   */
  'color'?: string
  /**
   * Background color of the text item. Default: `#ffffff`.
   */
  'fillColor'?: string
  /**
   * Opacity level of the background color. Possible values: any number between `0.0` and `1.0`, where: `0.0`: the background color is completely transparent or invisible. `1.0`: the background color is completely opaque or solid. Default: `1.0` if `fillColor` is provided, `0.0` if `fillColor` is not provided.
   */
  'fillOpacity'?: string
  /**
   * Font type for the text in the text item. Default: `arial`.
   */
  'fontFamily'?:
    | string
    | (typeof TextStylePlatformBulkCreateOperationExperimentalReleaseUsingFileFromDevice.FontFamilyEnum)[keyof typeof TextStylePlatformBulkCreateOperationExperimentalReleaseUsingFileFromDevice.FontFamilyEnum]
  /**
   * Font size, in dp. Default: `14`.
   */
  'fontSize'?: string
  /**
   * Horizontal alignment for the item\'s content. Default: `center.`
   */
  'textAlign'?:
    | string
    | (typeof TextStylePlatformBulkCreateOperationExperimentalReleaseUsingFileFromDevice.TextAlignEnum)[keyof typeof TextStylePlatformBulkCreateOperationExperimentalReleaseUsingFileFromDevice.TextAlignEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
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
      type: 'TextStylePlatformBulkCreateOperationExperimentalReleaseUsingFileFromDevice.FontFamilyEnum',
    },
    {
      name: 'fontSize',
      baseName: 'fontSize',
      type: 'string',
    },
    {
      name: 'textAlign',
      baseName: 'textAlign',
      type: 'TextStylePlatformBulkCreateOperationExperimentalReleaseUsingFileFromDevice.TextAlignEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return TextStylePlatformBulkCreateOperationExperimentalReleaseUsingFileFromDevice.attributeTypeMap
  }
}

export namespace TextStylePlatformBulkCreateOperationExperimentalReleaseUsingFileFromDevice {
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
}
