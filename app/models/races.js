exports.definition = {
    config : {
        "columns": {
            "id": "int",
            "circuit_length": "int",
            "circuit_name": "string",
            "country_id": "int", //countries model id
            "distance": "int",
            "lap_record_driver": "string",
            "lap_record_time": "string",
            "lap_record_year": "int",
            "laps": "int",
            "latitude": "float",
            "longitude": "float",
            "name": "string",
            "practice1_datetime": "date",
            "practice2_datetime": "date",
            "practice3_datetime": "date",
            "qualify_datetime": "date",
            "race_datetime": "date"
        },
        "defaults": {
        },
        "adapter": {
            "collection_name": "races",
            "db_name": "f1experience",
            "db_file": "f1experience.sqlite",
            "idAttribute": "id",
            "type": "sql"
        }
    }
}
