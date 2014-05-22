exports.definition = {
    config : {
        "columns": {
            "id": "int",
            "name": "string"
        },
        "defaults": {
        },
        "adapter": {
            "collection_name": "countries",
            "db_name": "f1experience",
            "db_file": "f1experience.sqlite",
            "idAttribute": "id",
            "type": "sql"
        }
    }
}
