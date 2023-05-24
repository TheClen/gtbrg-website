import base from "./base"

const createProject = (idProject) => {
    base('Editors').create([
        {
          "fields": {
            "Name": "Editor 1",
            "Content": "Your content here",
            "Projects": [
              idProject
            ],
          }
        },
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