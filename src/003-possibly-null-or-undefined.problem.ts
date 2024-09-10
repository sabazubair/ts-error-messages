const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");

console.log(id?.toUpperCase());

// optional chaining will convert null to undefined
// non-null assertion operator is unsafe, i.e. id!.toUpperCase()
// option #1: use conditional, if (id) { console.log(id.toUpperCase()) }
// option #2: if(!id){throw new Error("id is required")}
