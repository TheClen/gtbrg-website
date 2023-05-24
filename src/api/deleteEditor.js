import base from "./base"

const deleteEditor = (id, callback) => {
    base('Editors').destroy([id], function(err, deletedRecords) {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Deleted', deletedRecords.length, 'records');
        callback();
      });
}

export default deleteEditor;