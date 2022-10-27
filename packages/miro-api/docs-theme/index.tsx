import {Application, JSX, DefaultTheme, DefaultThemeRenderContext, Options, ReflectionKind} from 'typedoc'

export class MiroThemeContext extends DefaultThemeRenderContext {
  constructor(theme: DefaultTheme, options: Options) {
    super(theme, options)

    // Remove footer
    this.footer = () => null

    // Replace navigation with custom index
    const OldNav = this.navigation
    this.navigation = (context) => {
      type Item = {
        title: string
        url?: string
        cssClasses?: string
        children?: Array<Item>
      }
      const items: Item[] = [
        {
          title: 'Miro',
          url: 'classes/index.Miro.html',
        },
        {
          title: 'MiroApi',
          url: 'classes/index.MiroApi.html',
          children: [
            {
              title: 'Board',
              url: 'classes/index.Board.html',
              children: [
                {title: 'StickyNoteItem'},
                {title: 'TextItem'},
                {title: 'CardItem'},
                {title: 'AppCardItem'},
                {title: 'DocumentItem'},
                {title: 'EmbedItem'},
                {title: 'ShapeItem'},
                {title: 'ImageItem'},
                {title: 'FrameItem'},
                {title: 'Item', url: 'classes/index.Item.html'},
                {title: 'Connector', url: 'classes/index.Connector.html'},
                {title: 'Tag', url: 'classes/index.Tag.html'},
              ],
            },
            {title: 'Team', url: 'classes/index.Team.html'},
            {title: 'Organization', url: 'classes/index.Organization.html'},
          ],
        },
        {
          title: 'MiroOptions',
          url: 'interfaces/index.MiroOptions.html',
        },
        {
          title: 'Storage',
          url: 'interfaces/index._internal_.Storage.html',
        },
      ]

      const Navigation = ({items}: {items: Item[]}) => {
        return (
          <ul class="js-category-list category" data-id={1}>
            {items.map((item) => (
              <li>
                <a
                  class="tsd-index-link"
                  href={this.relativeURL(item.url || `classes/index._internal_.${item.title}.html`)}
                >
                  {this.icons[ReflectionKind.Class]()}
                  {item.title}
                </a>
                {item.children ? <Navigation items={item.children} /> : null}
              </li>
            ))}
          </ul>
        )
      }

      return (
        <>
          <div class="tree">
            <div class="tree-content">
              <a class="tsd-index-link" href={this.relativeURL('./index.html')}>
                {this.icons[ReflectionKind.Module]()}
                @mirohq/miro-api
              </a>
              <Navigation items={items} />
            </div>
          </div>
          <hr />
          {this.secondaryNavigation(context)}
        </>
      )
    }
  }
}

export class MiroTheme extends DefaultTheme {
  private _contextCache?: MiroThemeContext

  override getRenderContext(): MiroThemeContext {
    this._contextCache ||= new MiroThemeContext(this, this.application.options)
    return this._contextCache
  }
}

export function load(app: Application) {
  // Add custom css
  app.renderer.hooks.on(
    'head.end',
    (): JSX.Element => (
      <style>
        <JSX.Raw
          html={`
.tsd-hierarchy {
  display: none;
}

.tsd-sources {
  color: #777;
}

.tsd-sources a {
  color: #888;
}

.tsd-accordion-summary {
  display: none;
}

.tsd-breadcrumb {
  display: none;
}

.col-content {
  order: 2;
  padding-right: 0;
  padding-left: 1em;
}

.col-menu {
  order: 1;
  font-size: 13px;
  font-family: "Roboto Mono", monospace;
}

.col-content, .col-menu {
  margin: 0;
  top: 0;
}

@media (min-width: 1024px) {
  .col-menu {
    border-left: none;
    border-right: 1px solid var(--color-accent);
  }
}

.tree {
  margin-top: 20px;
  background: var(--color-panel);
}

.tree-config {
  display: flex;
  gap: 8px;
  justify-content: end;
  padding: 8px;
}

.tree-content ul {
  padding-left: 5px;
  list-style: none;
  margin: 0;
}

.tree-content ul li {
  position: relative;
  padding-left: 15px;
  box-sizing: border-box;
}

.tree-content ul li:before {
  position: absolute;
  top: 15px;
  left: 0;
  width: 10px;
  height: 1px;
  margin: auto;
  content: "";
  background-color: #666;
}

.tree-content ul li:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1px;
  height: 100%;
  content: "";
  background-color: #666;
}

.tree-content ul li:last-child:after {
  height: 15px;
}

.tree a {
  cursor: pointer;
  color: var(--color-text);
}

.tsd-page-toolbar {
  display: none;
}

`}
        />
      </style>
    ),
  )

  // register custom theme
  app.renderer.defineTheme('miro', MiroTheme)
}
