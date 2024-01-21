/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "caf3nf6tr9i69mq",
    "created": "2023-12-26 06:23:34.447Z",
    "updated": "2023-12-26 06:23:34.447Z",
    "name": "tiger",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qaouq25b",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dtomoelp",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("caf3nf6tr9i69mq");

  return dao.deleteCollection(collection);
})
