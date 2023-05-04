import base from "./base"

const getProjects = (callback) => {
    base("projects")
      .select({view: "Grid view"})
      .eachPage((records, fetchNextPage) => {
        callback(records);
        fetchNextPage();
      })
}

export default getProjects;