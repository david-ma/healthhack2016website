## HealthHack Australia - 2016 website
Hello,

David couldn't figure out how to get the HealthHack 2015 website working. So he decided to build the 2016 website as static site with simple HTML pages. The public folder _should_ be able to be served as-is.

But of course, extra features were requested and added, so it isn't just a simple website anymore. It now needs [Thalia](https://github.com/david-ma/Thalia) as a server. Hopefully that documentation is better than this.

Clone this repository as a folder under "websites" in your Thalia installation.

I.e. Thalia/websites/healthhack

Then run `npm serve healthhack` from the Thalia root folder. (after doing the npm install, gulp build, etc.)

Thalia is a bespoke nodejs server, the healthhack 2016 website has a few things in config.js which makes it different to a static site.

E.g. allowing editing of city pages, dynamic serving of city pages, and serving of challenges data as a JSON.

---

## Git hooks setup
```bash
  rm -r .git/hooks # Delete the git hooks sample folder
  ln -s -T ../hooks .git/hooks
```
