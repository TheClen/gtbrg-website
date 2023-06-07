import base from "./base"

const deleteEditor = (idList, callback) => {
    base('Editors').destroy(idList, function(err, deletedRecords) {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Deleted', deletedRecords.length, 'records');
        callback();
      });
}

export default deleteEditor;