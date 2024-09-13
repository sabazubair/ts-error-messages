class User {
  // private username: string = ''; option 1: initialize username as an empty string

  // private username: string; // option 2: use a constructor to initialize string
  // constructor() {
  //   this.username = "";
  // }

  // private username?: string; // option 3: set username to optional: This is useful when you want username to exist, but you're not sure if it will always have a value.

  // private username!: string; // option 4: use the non-null assertion operator: This tells TypeScript that username will be initialized before it's used. TL;DR: Not initialized right away, but you promise to initialize it before using it.

  private username: string; // recommended option. username is required.
  constructor(username: string) {
    this.username = username;
  }
}
