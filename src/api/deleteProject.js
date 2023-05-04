import base from "./base"

const deleteProject = (id, callback) => {
    base('Projects').destroy([id], function(err, deletedRecords) {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Deleted', deletedRecords.length, 'records');
        callback();
      });
}

export default deleteProject;