import miro_api
from miro_api.models import TextData

api = miro_api.MiroApi('eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_meKgs63fRKFm_EVJplBBEjsavKk')

items = api.get_items('uXjVNkqNqGc=')

if data := items.data:
    item = items.data[0]
    if isinstance(item, TextData):
        print(item.content)

