```mermaid
classDiagram
  direction TB

  class Api {
      %% MUST
      createBoard() Board
      getBoard() Board
      getBoards() Board[]
      getOrganization() Organization

      %% NICE
      getAllBoards() Board[]
  }
  class Organization {
      %% MUST
      createTeam() Team
      getTeam() Team
      getTeams() Team[]

      %% NICE
      getDataClassification() DataClassification
      getDefaultTeamSettings() TeamSettings
      getOrganizationMember() OrganizationMember
      getOrganizationMembers() OrganizationMember[]
  }
  class Team {
      %% MUST
      updateTeam() void
      getBoards() Board[]
      inviteTeamMember() void
      deleteTeam() void
      deleteTeamMember() void
      getTeamMember() TeamMember
      getTeamMembers() TeamMember[]

      %% NICE
      getBoardDataClassification() BoardDataClassification
      setBoardDataClassification() void
      setBoardDataClassificationBulk() void
      getDataClassification() DataClassification
      setDataClassification() void
      getTeamSettings() TeamSettings
      updateTeamSettings() void
  }
  class TeamMember {
      %% NICE
      update() void
  }
  class Board {
      %% MUST
      createAppCardItem() AppCardItem
      createCardItem() CardItem
      createConnector() Connector
      createDocumentItemUsingUrl() DocumentItem
      createEmbedItem() EmbedItem
      createFrameItem() FrameItem
      createImageItemUsingUrl() ImageItem
      createShapeItem() ShapeItem
      createStickyNoteItem() StickyNoteItem
      createTextItem() TextItem
      getAppCardItem() AppCardItem
      getCardItem() CardItem
      getConnector() Connector
      getConnectors() Connector[]
      getDocumentItem() DocumentItem
      getEmbedItem() EmbedItem
      getFrameItem() FrameItem
      getImageItem() ImageItem
      getShapeItem() ShapeItem
      getItem() Item
      getStickyNoteItem() StickyNoteItem
      getTextItem() TextItem
      getItems() Item[]

      %% NICE
      createTag() Tag
      getTag() Tag
      getTags() Tag[]
      getAllTags() Tag[]
      getAllItems() Item[]
      getMember() BoardMember
      getItemsWithinFrame() Item[]
      getMembers() BoardMember[]
      getAllMembers() BoardMember[]
      copy() void
      share() void
      update() void
      delete() void
      removeMember() void
      removeTag() void
  }
  class BoardMember {
      %% NICE
      update() void
  }
  class Item {
      %% MUST
      update() void
      delete() void

      %% NICE
      getTags() Tag[]
      removeTag() void
      attachTag() void
      connectTo() void
      getParent() Frame
  }
  class AppCardItem {
      %% MUST
      update() void
      delete() void

      %% NICE
      getTags() Tag[]
      removeTag() void
      attachTag() void
      connectTo() void
      getParent() Frame
  }
  class CardItem {
      %% MUST
      update() void
      delete() void

      %% NICE
      getTags() Tag[]
      removeTag() void
      attachTag() void
      connectTo() void
      getParent() Frame
  }
  class DocumentItem {
      %% MUST
      update() void
      delete() void

      %% NICE
      getTags() Tag[]
      removeTag() void
      attachTag() void
      connectTo() void
      getParent() Frame
  }
  class EmbedItem {
      %% MUST
      update() void
      delete() void

      %% NICE
      getTags() Tag[]
      removeTag() void
      attachTag() void
      connectTo() void
      getParent() Frame
  }
  class FrameItem {
      %% MUST
      update() void
      delete() void

      %% NICE
      getItemsWithinFrame() Item[]
      getTags() Tag[]
      removeTag() void
      attachTag() void
  }
  class ImageItem {
      %% MUST
      update() void
      delete() void

      %% NICE
      getTags() Tag[]
      removeTag() void
      attachTag() void
      connectTo() void
      getParent() Frame
  }
  class ShapeItem {
      %% MUST
      update() void
      delete() void

      %% NICE
      getTags() Tag[]
      removeTag() void
      attachTag() void
      connectTo() void
      getParent() Frame
  }
  class StickyNoteItem {
      %% MUST
      update() void
      delete() void

      %% NICE
      getTags() Tag[]
      removeTag() void
      attachTag() void
      connectTo() void
      getParent() Frame
  }
  class TextItem {
      %% MUST
      update() void
      delete() void

      %% NICE
      getTags() Tag[]
      removeTag() void
      attachTag() void
      connectTo() void
      getParent() Frame
  }
  class Connector {
      %% MUST
      update() void
      delete() void
  }
  class Tag {
      %% NICE
      update() void
      delete() void
      getItemsByTag() Item[]
  }


  Api ..> "*" Board
  Api ..> "*" BoardMember
  Api ..> "*" Connector
  Api ..> "*" Item
  Api ..> "*" Tag
  Api ..> "1" AppCardItem
  Api ..> "1" CardItem
  Api ..> "1" DocumentItem
  Api ..> "1" EmbedItem
  Api ..> "1" FrameItem
  Api ..> "1" ImageItem
  Api ..> "1" Organization
  Api ..> "1" ShapeItem
  Api ..> "1" StickyNoteItem
  Api ..> "1" TextItem
  AppCardItem ..> "*" Tag
  Board ..> "*" BoardMember
  Board ..> "*" Connector
  Board ..> "*" Item
  Board ..> "*" Tag
  Board ..> "1" AppCardItem
  Board ..> "1" CardItem
  Board ..> "1" DocumentItem
  Board ..> "1" EmbedItem
  Board ..> "1" FrameItem
  Board ..> "1" ImageItem
  Board ..> "1" ShapeItem
  Board ..> "1" StickyNoteItem
  Board ..> "1" TextItem
  CardItem ..> "*" Tag
  DocumentItem ..> "*" Tag
  EmbedItem ..> "*" Tag
  FrameItem ..> "*" Tag
  ImageItem ..> "*" Tag
  Item ..> "*" Tag
  ShapeItem ..> "*" Tag
  StickyNoteItem ..> "*" Tag
  Tag ..> "*" Item
  Team ..> "*" Board
  Team ..> "*" TeamMember
  TextItem ..> "*" Tag
  Organization ..> "*" Team
```
