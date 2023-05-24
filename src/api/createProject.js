import base from "./base"

const createProject = (callback) => {
    base('Projects').create([
        {
          "fields": {
            "Name": "New project",
            "Files": [],
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
        callback();
      });
}

export default createProject;