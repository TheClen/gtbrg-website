import base from "./base"

const getEditors = (callback) => {
    base("editors")
    .select({view: "Grid view"})
    .eachPage((records, fetchNextPage) => {
      callback(records)
      fetchNextPage();
    })
}

export default getEditors;