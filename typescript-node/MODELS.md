```mermaid
graph TD;
Api-->|createBoard| Board
Api-->|getBoards| Board
Api-->|getOrganization| Organization
Organization-->|createTeam| Team
Organization-->|getDataClassification| DataClassification
Organization-->|getDefaultTeamSettings| TeamSettings
Organization-->|getOrganizationMember| OrganizationMember
Organization-->|getOrganizationMembers| OrganizationMember
Organization-->|getTeam| Team
Organization-->|getTeams| Team

Team-->|getBoardDataClassification| BoardDataClassification
Team-->|getDataClassification| DataClassification
Team-->|getTeamMember| TeamMember
Team-->|getTeamMembers| TeamMember
Team-->|getTeamSettings| TeamSettings




Board-->|createAppCardItem| AppCardItem
Board-->|createCardItem| CardItem
Board-->|createConnector| Connector
Board-->|createDocumentItemUsingUrl| DocumentItem
Board-->|createEmbedItem| EmbedItem
Board-->|createFrameItem| FrameItem
Board-->|createImageItemUsingUrl| ImageItem
Board-->|createShapeItem| ShapeItem
Board-->|createStickyNoteItem| StickyNoteItem
Board-->|createTag| Tag
Board-->|createTextItem| TextItem
Board-->|getMembers| BoardMember
Board-->|getAppCardItem| AppCardItem
Board-->|getCardItem| CardItem
Board-->|getConnector| Connector
Board-->|getConnectors| Connector
Board-->|getDocumentItem| DocumentItem
Board-->|getEmbedItem| EmbedItem
Board-->|getFrameItem| FrameItem
Board-->|getImageItem| ImageItem
Board-->|getShapeItem| ShapeItem
Board-->|getMember| BoardMember
Board-->|getItem| Item
Board-->|getStickyNoteItem| StickyNoteItem
Board-->|getTag| Tag
Board-->|getTags| Tag
Board-->|getTextItem| TextItem
Board-->|getItems| Item
Board-->|getItemsWithinFrame| Item

Item-->|getTags| Tag
AppCardItem-->|getTags| Tag
CardItem-->|getTags| Tag
DocumentItem-->|getTags| Tag
EmbedItem-->|getTags| Tag
FrameItem-->|getTags| Tag
ImageItem-->|getTags| Tag
ShapeItem-->|getTags| Tag
StickyNoteItem-->|getTags| Tag
TextItem-->|getTags| Tag

Tag-->|getItemsByTag| Item
```
