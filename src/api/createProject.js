import base from "./base"

const createProject = () => {
    base('Projects').create([
        {
          "fields": {
            "Name": "New project",
            "Files": [],
            "ProjetEditor": [],
            "Editors": []
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
}

export default createProject;