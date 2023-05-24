import base from "./base"

const renameEditor = (id, name) => {
    base('Editors').update([
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

export default renameEditor;