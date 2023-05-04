import base from "./base"

const renameRecord = (id, name) => {
    base('Projects').update([
        {
          "id": id,
          "fields": {
            "Name": name,
          }
        },
    ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function(record) {
          console.log(record.get('Files'));
        });
      });
}

export default renameRecord;