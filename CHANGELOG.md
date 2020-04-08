## [1.9.1](https://github.com/YappyBots/YappyGitLab/compare/v1.9.0...v1.9.1) (2020-04-08)


### Bug Fixes

* **discord:** allow DMs ([b34d95f](https://github.com/YappyBots/YappyGitLab/commit/b34d95f32a22abf6e4260ef6ec64a8a00ddb4ac0))
* **discord: commands:** data: don't spam, send in DMs ([5de6989](https://github.com/YappyBots/YappyGitLab/commit/5de6989c47cd40b800d46c9c02728292ef9782cc))
* **web:** allow events with no branches ([da428d0](https://github.com/YappyBots/YappyGitLab/commit/da428d07fc45b4453f264c900231cbc5495f348f))
* **web:** oh i used something not supported whoops ([3c2b05f](https://github.com/YappyBots/YappyGitLab/commit/3c2b05ff264a38dd12f6ef31db2d4d9f24c5d310))



# [1.9.0](https://github.com/YappyBots/YappyGitLab/compare/v1.8.3...v1.9.0-dev) (2020-04-08)

* Discord.js v12 update


### Bug Fixes

* **web:** update web code for discord v12 ([d58b62b](https://github.com/YappyBots/YappyGitLab/commit/d58b62b96f9958aba96de75b9ddc96f8bb0cebff))


### Features

* **discord: commands:** add 'data' administrator commands for insight on bot data usage ([2ea2be1](https://github.com/YappyBots/YappyGitLab/commit/2ea2be1f6540d715e8b75b2fc661356d7cb29cf4))



## [1.8.3](https://github.com/YappyBots/YappyGitLab/compare/v1.8.2...v1.8.3) (2020-03-24)


### Bug Fixes

* **discord: commands:** conf: prevent adding empty name events to filter list ([1dc4515](https://github.com/YappyBots/YappyGitLab/commit/1dc451594df9903753a1f5db5a9272169720e234))
* **discord: commands:** init: fix code error if no repo provided ([ec5d48a](https://github.com/YappyBots/YappyGitLab/commit/ec5d48aab5297b2d70786d99896c2e0f84bedfb6))
* **gitlab:** fix errors thrown when checking repo existance & not including all subgroups ([d5c8547](https://github.com/YappyBots/YappyGitLab/commit/d5c8547e27bf0ba5d9e624081f4d50c7b4cc21e1))
* **gitlab:** fix only URLs working ([54020b3](https://github.com/YappyBots/YappyGitLab/commit/54020b32819256414a2ec852b9ec200b7efac151))
* **gitlab:** parser: fix using wrong capture group ([a2ee421](https://github.com/YappyBots/YappyGitLab/commit/a2ee42103dbb53b00bd9633123cb2ff0fa346e8f))
* **gitlab:** replace url parser again with custom one for gitlab groups ([1a44dfc](https://github.com/YappyBots/YappyGitLab/commit/1a44dfc8b71a4389517a29b9a9cf6f88ed0bf358))
* remove mongoose require ([818e789](https://github.com/YappyBots/YappyGitLab/commit/818e7890899af77bfb30fd27af542f5f690cae20))



## [1.8.2](https://github.com/YappyBots/YappyGitLab/compare/v1.8.1...v1.8.2) (2019-12-04)


### Bug Fixes

* **discord:** do not exit on disconnect ([53f4a47](https://github.com/YappyBots/YappyGitLab/commit/53f4a473e6e03a3f7d995a0f3b792586531cb32e))



## [1.8.1](https://github.com/YappyBots/YappyGitLab/compare/v1.8.0...v1.8.1) (2019-12-04)


### Bug Fixes

* **discord: commands:** init: show usage if repo not provided ([89df14f](https://github.com/YappyBots/YappyGitLab/commit/89df14fa512a2b169c481d3a49ea7bcd40563116))
* **discord: commands:** invite: fix error when running ([1da955f](https://github.com/YappyBots/YappyGitLab/commit/1da955f637e4d76553b02603b2bdef67d1d64e4c))
* **models:** fix errors thrown when model doesn't exist in db ([d9673d0](https://github.com/YappyBots/YappyGitLab/commit/d9673d08d713f907d46c6693bb391453fc7def46))
* **npm:** remove snyk mentions from npm scripts to fix deploy script ([01890da](https://github.com/YappyBots/YappyGitLab/commit/01890dadaa846b08ec3b6230d60178c54a4e1633))



# [1.8.0](https://github.com/YappyBots/YappyGitLab/compare/v1.7.2...v1.8.0) (2019-11-28)


### Bug Fixes

* **db:** add 'job' event to automatically ignored (not styled yet) ([2dc511f](https://github.com/YappyBots/YappyGitLab/commit/2dc511f4d10077ea6ef3cf40db0eb5a8c3bf7b8b))
* **db:** fix initialization using nonexistent 'has' method ([c985e68](https://github.com/YappyBots/YappyGitLab/commit/c985e68c2454510cfc64c51af08a9a2bcc515a21))
* **db:** update yappy addons package name and passing models ([10976c4](https://github.com/YappyBots/YappyGitLab/commit/10976c47817236f01389e9b37d67000ede4eb70d))
* **dependencies:** add punycode ([20ffbe8](https://github.com/YappyBots/YappyGitLab/commit/20ffbe88c229f144af7bd43cbb176c5b43fcad6b))
* **discord:** restart on disconnect ([405172a](https://github.com/YappyBots/YappyGitLab/commit/405172ab05c34b846a9c65a61b5f8ef8b457f4a9))
* **discord: commands:** conf: don't check if event exists ([507ad6d](https://github.com/YappyBots/YappyGitLab/commit/507ad6d01fc001f197a53258a294e47fcdc5318c))
* **discord: commands:** conf: fix Action.DISABLE not working (was falsy value) ([c013c5d](https://github.com/YappyBots/YappyGitLab/commit/c013c5d7e02e6bfaac98ee5d20838280f8aac3b3))
* **discord: commands:** ping: update code for latest djs ([4534588](https://github.com/YappyBots/YappyGitLab/commit/4534588b57453cd16921eba8b5ae0f16270e978a))
* **github:** allow job events, improve url parser ([34ef9ec](https://github.com/YappyBots/YappyGitLab/commit/34ef9ec39a8fa4f9e6c5ab22df35696bc71ae1ac)), closes [#43](https://github.com/YappyBots/YappyGitLab/issues/43) [#29](https://github.com/YappyBots/YappyGitLab/issues/29) [#52](https://github.com/YappyBots/YappyGitLab/issues/52)


### Features

* **discord: commands:** init: add support for IDN ([#36](https://github.com/YappyBots/YappyGitLab/issues/36)) ([7f811ed](https://github.com/YappyBots/YappyGitLab/commit/7f811ed4378b23ec38965c6910d7441d800e7849))


### Performance Improvements

* **db:** cache guild prefixes ([9d9e41d](https://github.com/YappyBots/YappyGitLab/commit/9d9e41d9393b635f0c9fc3e1d93eb856a66f4bcf))
* **db:** switch to sqlite, add whitelist/blacklist system to conf ([cffdb35](https://github.com/YappyBots/YappyGitLab/commit/cffdb3594bfc0d034ab6f0c1d5b92b70368b11dc))



<a name="1.7.1"></a>
## [1.7.1](https://github.com/YappyBots/YappyGitLab/compare/v1.7.0...v1.7.1) (2018-07-18)



<a name="1.7.0"></a>
# [1.7.0](https://github.com/YappyBots/YappyGitLab/compare/v1.6.1...v1.7.0) (2018-07-18)


### Features

* **gitlab: events:** merge_request/approved and merge_request/unapproved ([#34](https://github.com/YappyBots/YappyGitLab/issues/34)) ([01bf76e](https://github.com/YappyBots/YappyGitLab/commit/01bf76e))



<a name="1.6.1"></a>
## [1.6.1](https://github.com/YappyBots/YappyGitLab/compare/v1.6.0...v1.6.1) (2018-07-16)


### Bug Fixes

* **models: channelconfig:** fix collection using deprecated find method ([7f29fb5](https://github.com/YappyBots/YappyGitLab/commit/7f29fb5))
* **moduls: channelconfig:** make sure a string isn't split by character onto array ([4a86d74](https://github.com/YappyBots/YappyGitLab/commit/4a86d74))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/YappyBots/YappyGitLab/compare/v1.5.7...v1.6.0) (2018-07-09)


### Features

* **discord: commands:** add `conf events [view|list|ignore|disable|enable|unignore] [event]` ([3c88665](https://github.com/YappyBots/YappyGitLab/commit/3c88665))



<a name="1.5.7"></a>
## [1.5.7](https://github.com/YappyBots/YappyGitLab/compare/v1.5.6...v1.5.7) (2018-06-27)


### Bug Fixes

* **gitlab: events:** fix event handler getting property from undefined ([9b9b94a](https://github.com/YappyBots/YappyGitLab/commit/9b9b94a))



<a name="1.5.5"></a>
## [1.5.5](https://github.com/YappyBots/YappyGitLab/compare/v1.5.4...v1.5.5) (2018-06-25)


### Bug Fixes

* **discord: commands:** conf: fix syntax error °_° ([ab16b27](https://github.com/YappyBots/YappyGitLab/commit/ab16b27))



<a name="1.5.4"></a>
## [1.5.4](https://github.com/YappyBots/YappyGitLab/compare/v1.5.3...v1.5.4) (2018-06-25)


### Bug Fixes

* **discord: commands:** conf: fix arg containing `-g` being ignored even if not global ([52271a9](https://github.com/YappyBots/YappyGitLab/commit/52271a9))



<a name="1.5.3"></a>
## [1.5.3](https://github.com/YappyBots/YappyGitLab/compare/v1.5.2...v1.5.3) (2018-06-25)


### Bug Fixes

* **discord: commands:** fix `-g` included in the argument name being interpreted as global ([0a10ef5](https://github.com/YappyBots/YappyGitLab/commit/0a10ef5))



<a name="1.5.2"></a>
## [1.5.2](https://github.com/YappyBots/YappyGitLab/compare/v1.5.1...v1.5.2) (2018-06-19)


### Bug Fixes

* **discord: commands:** init/remove: fix showing 'false' if embeds are enabled ([9796079](https://github.com/YappyBots/YappyGitLab/commit/9796079))
* **gitlab:** parser: fix double backslash if no subgroup ([67f7cbc](https://github.com/YappyBots/YappyGitLab/commit/67f7cbc))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/YappyBots/YappyGitLab/compare/v1.5.0...v1.5.1) (2018-06-17)


### Bug Fixes

* **gitlab:** parser: include subgroup(s) in full repo name ([9263b1f](https://github.com/YappyBots/YappyGitLab/commit/9263b1f))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/YappyBots/YappyGitLab/compare/v1.4.2...v1.5.0) (2018-06-17)


### Bug Fixes

* **dependencies:** update discordjs/discord.js to latest master ([0198e1e](https://github.com/YappyBots/YappyGitLab/commit/0198e1e))
* **discord: commands:** fix initorg using project name instead of path ([6934709](https://github.com/YappyBots/YappyGitLab/commit/6934709))
* **discord: commands:** include private repos in initorg ([a1c2bcb](https://github.com/YappyBots/YappyGitLab/commit/a1c2bcb))
* **discord: commands:** initorg: fix `e` undefined ([568cad0](https://github.com/YappyBots/YappyGitLab/commit/568cad0))
* **discord: commands:** initorg: fix success message error ([ff03906](https://github.com/YappyBots/YappyGitLab/commit/ff03906))
* **discord: commands:** update texts with 'github' to 'gitlab' ([5053987](https://github.com/YappyBots/YappyGitLab/commit/5053987))
* **gitlab:** move embed description limit into handler parser ([e5e7155](https://github.com/YappyBots/YappyGitLab/commit/e5e7155))
* **gitlab:** rework regex parser to accept more url variations ([e85d845](https://github.com/YappyBots/YappyGitLab/commit/e85d845))
* **gitlab: events:** merge_request/merge: fix error if merge commit sha is undefined ([2ec858a](https://github.com/YappyBots/YappyGitLab/commit/2ec858a)), closes [#26](https://github.com/YappyBots/YappyGitLab/issues/26)
* **gitlab: events:** wiki_page/create: fix error in text mode ([7e79df6](https://github.com/YappyBots/YappyGitLab/commit/7e79df6))
* **log:** remove binding of #message in Log ([e132410](https://github.com/YappyBots/YappyGitLab/commit/e132410))
* **models: channelconfig:** don't add channel config if it's missing a value ([d4e8522](https://github.com/YappyBots/YappyGitLab/commit/d4e8522))
* **web:** fix error if an error occurs when generating eventResponse ([8c4e633](https://github.com/YappyBots/YappyGitLab/commit/8c4e633)), closes [#27](https://github.com/YappyBots/YappyGitLab/issues/27)
* **web:** fix webhooks without action not working... ? ([1246cb4](https://github.com/YappyBots/YappyGitLab/commit/1246cb4)), closes [#31](https://github.com/YappyBots/YappyGitLab/issues/31)
* **web:** increase body limit to 500kb ([02fb01e](https://github.com/YappyBots/YappyGitLab/commit/02fb01e)), closes [#24](https://github.com/YappyBots/YappyGitLab/issues/24)
* **web:** set body limit to 5mb ([1fff9cb](https://github.com/YappyBots/YappyGitLab/commit/1fff9cb))


### Features

* **discord:** use addons command, allows for commands page ([0e53dcd](https://github.com/YappyBots/YappyGitLab/commit/0e53dcd))
* **gitlab: events:** add issue ([#31](https://github.com/YappyBots/YappyGitLab/issues/31)) ([8bfc74f](https://github.com/YappyBots/YappyGitLab/commit/8bfc74f))


### Performance Improvements

* **models: serverconfig:** only save server config into cache for servers where messages are being ([7ca752d](https://github.com/YappyBots/YappyGitLab/commit/7ca752d))



<a name="1.4.2"></a>
## [1.4.2](https://github.com/YappyBots/YappyGitLab/compare/v1.4.1...v1.4.2) (2018-02-17)


### Bug Fixes

* **gitlab:** fix repo using input and not parsed output ([7797844](https://github.com/YappyBots/YappyGitLab/commit/7797844))
* **gitlab:** rework parser to support .git and multiple organization groups ([eb49c5c](https://github.com/YappyBots/YappyGitLab/commit/eb49c5c))
* **gitlab:** rework parser url to allow urls starting with git@ ([101ab7a](https://github.com/YappyBots/YappyGitLab/commit/101ab7a))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/YappyBots/YappyGitLab/compare/v1.4.0...v1.4.1) (2018-02-17)


### Bug Fixes

* **dependencies:** update bufferutil, chalk, moment1, snekfetch, snyk, eslint, dotenv ([c274ed7](https://github.com/YappyBots/YappyGitLab/commit/c274ed7))
* **discord:** fix DM's not working ([ab54c6b](https://github.com/YappyBots/YappyGitLab/commit/ab54c6b))
* **models: serverconfig:** don't add server config if guild is unavailable ([d9a20da](https://github.com/YappyBots/YappyGitLab/commit/d9a20da))
* **models: serverconfig:** hopefully fix adding guild that is already in config ([7d87ac9](https://github.com/YappyBots/YappyGitLab/commit/7d87ac9))
* **snyk:** update policy ([b01390c](https://github.com/YappyBots/YappyGitLab/commit/b01390c))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/YappyBots/YappyGitLab/compare/v1.3.8...v1.4.0) (2017-12-16)


### Bug Fixes

* **models: channelconfig:** maybe fix e.repos not being defined, set e.repos to [] if null ([e927229](https://github.com/YappyBots/YappyGitLab/commit/e927229))


### Features

* **gitlab: events:** add pipeline ([#21](https://github.com/YappyBots/YappyGitLab/issues/21)) ([7e8a790](https://github.com/YappyBots/YappyGitLab/commit/7e8a790))
* **logging:** add discord logging with yappybots-addons ([5c944c7](https://github.com/YappyBots/YappyGitLab/commit/5c944c7))



<a name="1.3.8"></a>
## [1.3.8](https://github.com/YappyBots/YappyGitLab/compare/v1.3.7...v1.3.8) (2017-10-21)


### Bug Fixes

* **discord: commands:** make reboot require owner ([6bac3d5](https://github.com/YappyBots/YappyGitLab/commit/6bac3d5))



<a name="1.3.7"></a>
## [1.3.7](https://github.com/YappyBots/YappyGitLab/compare/v1.3.6...v1.3.7) (2017-10-14)


### Bug Fixes

* **discord: commands:** invite - set client id to user ID ([9c72d7d](https://github.com/YappyBots/YappyGitLab/commit/9c72d7d))
* **models:** fix no config found errors by creating config on the spot ([0098d23](https://github.com/YappyBots/YappyGitLab/commit/0098d23))
* **snyk:** fix new vulnerabilities ([17ebc6b](https://github.com/YappyBots/YappyGitLab/commit/17ebc6b))



<a name="1.3.6"></a>
## [1.3.6](https://github.com/YappyBots/YappyGitLab/compare/v1.3.5...v1.3.6) (2017-10-12)


### Bug Fixes

* **discord: commands:** init - fix allowing multiple inits of same repo ([a2a3fdf](https://github.com/YappyBots/YappyGitLab/commit/a2a3fdf))
* **discord: commands:** update - show "no output" if no NPM stdout ([4644c7e](https://github.com/YappyBots/YappyGitLab/commit/4644c7e))
* **gitlab:** fix something with parser get repo thing ([c62d258](https://github.com/YappyBots/YappyGitLab/commit/c62d258))
* **gitlab:** parser - fix wrong type in repository typedef ([169e91f](https://github.com/YappyBots/YappyGitLab/commit/169e91f))



<a name="1.3.5"></a>
## [1.3.5](https://github.com/YappyBots/YappyGitLab/compare/v1.3.4...v1.3.5) (2017-10-12)


### Bug Fixes

* **models:** try to keep alive db connection ([6657d0a](https://github.com/YappyBots/YappyGitLab/commit/6657d0a))
* **models: serverconfig:** fix this.delete causing error bc it's #deleteGuild ([d84e0fe](https://github.com/YappyBots/YappyGitLab/commit/d84e0fe))



<a name="1.3.4"></a>
## [1.3.4](https://github.com/YappyBots/YappyGitLab/compare/v1.3.3...v1.3.4) (2017-10-11)


### Bug Fixes

* **dependencies:** update body-parser, moment, winston, snekfetch, snyk, express, mongoose, jsdoc, e ([b65963d](https://github.com/YappyBots/YappyGitLab/commit/b65963d))
* **discord: commands:** init - explain how to init private repo ([c1afb94](https://github.com/YappyBots/YappyGitLab/commit/c1afb94)), closes [#13](https://github.com/YappyBots/YappyGitLab/issues/13)
* **gitlab:** use regex for parser, support groups ([79f4f27](https://github.com/YappyBots/YappyGitLab/commit/79f4f27)), closes [#14](https://github.com/YappyBots/YappyGitLab/issues/14)
* **gitlab: events:** push - return null if 0 commits, then gets ignored ([d92ab36](https://github.com/YappyBots/YappyGitLab/commit/d92ab36))
* **models:** fix bot not adding new channels/guilds if none in cache ([1c7fd72](https://github.com/YappyBots/YappyGitLab/commit/1c7fd72))
* **web:** fix parsing project namespace, therefore not supporting groups ([c372011](https://github.com/YappyBots/YappyGitLab/commit/c372011))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/YappyBots/YappyGitLab/compare/v1.3.2...v1.3.3) (2017-09-09)


### Bug Fixes

* **dependencies:** update express, mongoose, jsdoc, body-parser, bugsnag, chalk, snekfetch, snyk, es ([a0b7f12](https://github.com/YappyBots/YappyGitLab/commit/a0b7f12))
* **discord: commands:** fix update - move to NPM and limit stdout to 1000 chars ([78d3df9](https://github.com/YappyBots/YappyGitLab/commit/78d3df9))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/YappyBots/YappyGitLab/compare/v1.3.1...v1.3.2) (2017-09-09)


### Bug Fixes

* **dependencies:** update dependencies (discord.js#master) ([d86b710](https://github.com/YappyBots/YappyGitLab/commit/d86b710))
* **discord: commands:** change init to use new domain ([ab65fd3](https://github.com/YappyBots/YappyGitLab/commit/ab65fd3))
* **discord: commands:** change initorg to use new domain ([8e106a0](https://github.com/YappyBots/YappyGitLab/commit/8e106a0))
* **discord: commands:** fix clean: change to msg.channel.messages.fetch ([f5810b8](https://github.com/YappyBots/YappyGitLab/commit/f5810b8))
* **discord: modules:** change casual help to use new domain ([e593d37](https://github.com/YappyBots/YappyGitLab/commit/e593d37))
* **web:** fix login button link, removed '/' ([c3e1f1c](https://github.com/YappyBots/YappyGitLab/commit/c3e1f1c))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/YappyBots/YappyGitLab/compare/v1.3.0...v1.3.1) (2017-08-23)


### Bug Fixes

* **web:** fix url encoded not working ([4822eb9](https://github.com/YappyBots/YappyGitLab/commit/4822eb9))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/YappyBots/YappyGitLab/compare/v1.2.1...v1.3.0) (2017-07-21)


### Bug Fixes

* **dependencies:** add yappy-bots package from github ([5abf681](https://github.com/YappyBots/YappyGitLab/commit/5abf681))
* **dependencies:** remove unused dependency from package-lock.json ([561aed0](https://github.com/YappyBots/YappyGitLab/commit/561aed0))
* **discord:** fix references to RichEmbed instead of MessageEmbed ([ec3ed4c](https://github.com/YappyBots/YappyGitLab/commit/ec3ed4c))
* **web:** allow repos in groups to work properly ([d290ada](https://github.com/YappyBots/YappyGitLab/commit/d290ada))
* **web:** fix another wrong require path ([6fe24fe](https://github.com/YappyBots/YappyGitLab/commit/6fe24fe))
* **web:** fix some wrong local dendencies paths ([94a308a](https://github.com/YappyBots/YappyGitLab/commit/94a308a))


### Features

* **web):** add basic discord oAuth ([418ebd5](https://github.com/YappyBots/YappyGitLab/commit/418ebd5))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/YappyBots/YappyGitLab/compare/v1.2.0...v1.2.1) (2017-07-16)


### Bug Fixes

* **gitlab:** fix undef var and comma dangle ([fc0b30b](https://github.com/YappyBots/YappyGitLab/commit/fc0b30b))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/YappyBots/YappyGitLab/compare/v1.1.2...v1.2.0) (2017-07-16)


### Bug Fixes

* **discord:** fix commands not working in DMs ([8775292](https://github.com/YappyBots/YappyGitLab/commit/8775292))
* **discord:** guild-only commands error in DM and don't show in help now ([8e28ea7](https://github.com/YappyBots/YappyGitLab/commit/8e28ea7))
* **discord: commands:** fix command usage of invite ([1ea56ad](https://github.com/YappyBots/YappyGitLab/commit/1ea56ad))


### Features

* **discord: commands:** add initorg command ([8f48842](https://github.com/YappyBots/YappyGitLab/commit/8f48842))



<a name="1.1.2"></a>
## [1.1.2](https://github.com/YappyBots/YappyGitLab/compare/v1.1.1...v1.1.2) (2017-07-15)


### Bug Fixes

* **models: channelconfig:** fix ChannelConfig#setChannel setting map w/ undefined property ([35aebc7](https://github.com/YappyBots/YappyGitLab/commit/35aebc7))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/YappyBots/YappyGitLab/compare/v1.1.0...v1.1.1) (2017-07-13)


### Bug Fixes

* **discord:** remove CHANNEL_CREATE from disabled events ffs ([b656754](https://github.com/YappyBots/YappyGitLab/commit/b656754))
* **gitlab: events:** fix event handler author icon_url erroring ([9c03f81](https://github.com/YappyBots/YappyGitLab/commit/9c03f81))
* **web:** fix disabledEvents looking for event name rather than shortname ([4dac4aa](https://github.com/YappyBots/YappyGitLab/commit/4dac4aa))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/YappyBots/YappyGitLab/compare/v1.0.3...v1.1.0) (2017-05-22)


### Features

* **gitlab: events:** add ability to ignore branch(es) & user(s) via conf ([6d572c1](https://github.com/YappyBots/YappyGitLab/commit/6d572c1)), closes [#11](https://github.com/YappyBots/YappyGitLab/issues/11) [#12](https://github.com/YappyBots/YappyGitLab/issues/12)



<a name="1.0.3"></a>
## [1.0.3](https://github.com/YappyBots/YappyGitLab/compare/v1.0.2...v1.0.3) (2017-05-17)


### Bug Fixes

* **discord: commands:** conf: add disabled events config to `GL! conf` ([1254653](https://github.com/YappyBots/YappyGitLab/commit/1254653)), closes [#9](https://github.com/YappyBots/YappyGitLab/issues/9)
* **discord: commands:** conf: show name of property in field view ([6441cc2](https://github.com/YappyBots/YappyGitLab/commit/6441cc2)), closes [#10](https://github.com/YappyBots/YappyGitLab/issues/10)
* **discord: commands:** init: fix command to enable embed in success msg ([4f7ea84](https://github.com/YappyBots/YappyGitLab/commit/4f7ea84)), closes [#8](https://github.com/YappyBots/YappyGitLab/issues/8)



<a name="1.0.2"></a>
## [1.0.2](https://github.com/YappyBots/YappyGitLab/compare/v1.0.1...v1.0.2) (2017-05-15)


### Bug Fixes

* **models:** hopefully fix duplicating config items on start ([e3a36b1](https://github.com/YappyBots/YappyGitLab/commit/e3a36b1))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/YappyBots/YappyGitLab/compare/v1.0.0...v1.0.1) (2017-05-14)


### Bug Fixes

* **dependencies:** update mongoose[@4](https://github.com/4).9.9 ([610dfcb](https://github.com/YappyBots/YappyGitLab/commit/610dfcb))
* **snyk:** run `snyk wizard` and fix a few vulnerabilities ([14f7469](https://github.com/YappyBots/YappyGitLab/commit/14f7469))
* **snyk:** run `snyk wizard` once again ([e10173d](https://github.com/YappyBots/YappyGitLab/commit/e10173d))
* **web:** add error handling and log error ([b52f33d](https://github.com/YappyBots/YappyGitLab/commit/b52f33d))
* **web:** fix channels with repo handling, expected `channelId` instead of `channelID` ([5489e09](https://github.com/YappyBots/YappyGitLab/commit/5489e09))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/YappyBots/YappyGitLab/compare/59ccd5e...v1.0.0) (2017-05-13)


### Bug Fixes

* **models: channelconfig:** remove `prefix` item from .validKeys ([7870590](https://github.com/YappyBots/YappyGitLab/commit/7870590))
* package.json & .snyk to reduce vulnerabilities ([59ccd5e](https://github.com/YappyBots/YappyGitLab/commit/59ccd5e))
* **bot:** fix disconnect error log, now using event.code ([61e8e48](https://github.com/YappyBots/YappyGitLab/commit/61e8e48))
* **dependencies:** add discord.js back ([ec00054](https://github.com/YappyBots/YappyGitLab/commit/ec00054))
* **dependencies:** remove express-handlebars ([ef45337](https://github.com/YappyBots/YappyGitLab/commit/ef45337))
* **dependencies:** update dependencies ([308e38a](https://github.com/YappyBots/YappyGitLab/commit/308e38a))
* **dependencies:** update dependencies ([d79db1e](https://github.com/YappyBots/YappyGitLab/commit/d79db1e))
* **dependencies:** update dependencies ([c3ca9b9](https://github.com/YappyBots/YappyGitLab/commit/c3ca9b9))
* **dependencies:** update djs to master (v12.0.0 dev) ([65d8549](https://github.com/YappyBots/YappyGitLab/commit/65d8549))
* **dependencies:** update djs to v11.1.0 (from repo) ([35bd8e8](https://github.com/YappyBots/YappyGitLab/commit/35bd8e8))
* **discord:** st prefix to ([2638b7e](https://github.com/YappyBots/YappyGitLab/commit/2638b7e))
* **discord: commands:** actually fix stats' embed footer icon_url (was iconURL) ([6c39ac1](https://github.com/YappyBots/YappyGitLab/commit/6c39ac1))
* **discord: commands:** fix color on updating embed ([036978d](https://github.com/YappyBots/YappyGitLab/commit/036978d))
* **discord: commands:** fix conf command interpreting '-' as --global ([ed51c20](https://github.com/YappyBots/YappyGitLab/commit/ed51c20)), closes [#3](https://github.com/YappyBots/YappyGitLab/issues/3)
* **discord: commands:** fix pulling update on `update` command ([034b8a5](https://github.com/YappyBots/YappyGitLab/commit/034b8a5))
* **discord: commands:** fix stats' embed iconURL, and change to use footer ([c7b6d27](https://github.com/YappyBots/YappyGitLab/commit/c7b6d27))
* **discord: modules:** fix casual help module requiring prefix + "yappy" + "gitlab", only prefix now ([a2cbc6c](https://github.com/YappyBots/YappyGitLab/commit/a2cbc6c))
* **eslint:** fix unecessary module required ([0795998](https://github.com/YappyBots/YappyGitLab/commit/0795998))
* **gitlab: events:** fix embed colors by transiforming to 0x###### ([f3c8237](https://github.com/YappyBots/YappyGitLab/commit/f3c8237))
* **help:** add quotes to usage in help for command ([dad6137](https://github.com/YappyBots/YappyGitLab/commit/dad6137))
* **models: channelconfig:** add `pipeline` to default disabledEvents in channelConfigSchema ([fc21636](https://github.com/YappyBots/YappyGitLab/commit/fc21636))
* **models: serverconfig:** fix ServerConfig#add setting Collection with .channelId prop of guild ([ac330b1](https://github.com/YappyBots/YappyGitLab/commit/ac330b1)), closes [#6](https://github.com/YappyBots/YappyGitLab/issues/6)
* **mongoose:** add error handling (logging) ([0ac5f12](https://github.com/YappyBots/YappyGitLab/commit/0ac5f12))


### Features

* **commands:** add issue comamnd to search and get issue info ([82fe8ab](https://github.com/YappyBots/YappyGitLab/commit/82fe8ab))
* **conf:** add ServerConf for prefix configuration ([2d6f20e](https://github.com/YappyBots/YappyGitLab/commit/2d6f20e))
* **dependencies:** add express-handlebars & run snyk wizard ([5172c13](https://github.com/YappyBots/YappyGitLab/commit/5172c13))
* **dependencies:** add hbs ([7dd535a](https://github.com/YappyBots/YappyGitLab/commit/7dd535a))
* **discord: commands:** add `invite` command ([6307b74](https://github.com/YappyBots/YappyGitLab/commit/6307b74))
* **discord: commands:** add merge request command ([df60c39](https://github.com/YappyBots/YappyGitLab/commit/df60c39))
* **discord: commands:** add update command ([d34ab21](https://github.com/YappyBots/YappyGitLab/commit/d34ab21)), closes [#5](https://github.com/YappyBots/YappyGitLab/issues/5)
* **discord: commands:** if issue description contains image, add and send with embed ([17ca650](https://github.com/YappyBots/YappyGitLab/commit/17ca650))
* **discord: commands:** if merge request description contains image, add and send with embed ([edc437e](https://github.com/YappyBots/YappyGitLab/commit/edc437e))
* **discord: commands:** send msg to channel when invite is sent to user in invite commmand ([c0466d5](https://github.com/YappyBots/YappyGitLab/commit/c0466d5))
* **gitlab: events:** add note/issue - fired when someone comments on issue ([13fcf70](https://github.com/YappyBots/YappyGitLab/commit/13fcf70))
* **gitlab: events:** add note/mergerequest - fired when someone comments on merge request ([214389e](https://github.com/YappyBots/YappyGitLab/commit/214389e))
* **gitlab: events:** add note/snippet - fired when someone comments on snippet ([692178b](https://github.com/YappyBots/YappyGitLab/commit/692178b))
* **gitlab: events:** add wiki_page/create - fired when wiki page is created ([de4dd33](https://github.com/YappyBots/YappyGitLab/commit/de4dd33))
* **gitlab: events:** add wiki_page/delete - fired when wiki page is deleted ([37908f7](https://github.com/YappyBots/YappyGitLab/commit/37908f7))
* **gitlab: events:** add wiki_page/update - fired when wiki page is updated ([34870e8](https://github.com/YappyBots/YappyGitLab/commit/34870e8))
* **middleware:** add UnhandledError middleware to handle unhandled errors ([abca414](https://github.com/YappyBots/YappyGitLab/commit/abca414))
* **modules:** add modules for message middlware ([46f2407](https://github.com/YappyBots/YappyGitLab/commit/46f2407))
* **modules:** create module CasualHelp for detecting need of help with ApiAI and responding ([5211eaa](https://github.com/YappyBots/YappyGitLab/commit/5211eaa))
* **web:** add nice-looking landing page with bot stats ([8534bab](https://github.com/YappyBots/YappyGitLab/commit/8534bab))
* **web:** add online status color circle, move screenshot img to right ([577af2c](https://github.com/YappyBots/YappyGitLab/commit/577af2c))


### Performance Improvements

* **bot:** add message sweeping & cache options to decrease mem usage ([93d1900](https://github.com/YappyBots/YappyGitLab/commit/93d1900))
* **command:** remove `async` from init command ([6dcd12c](https://github.com/YappyBots/YappyGitLab/commit/6dcd12c))
* **gitlab: emitting:** only generate event embed & text once per webhook ([4ce70dd](https://github.com/YappyBots/YappyGitLab/commit/4ce70dd))
* **gitlab: events:** update issue/* & note/commit - remove string creation on embed descriptions ([360d7b8](https://github.com/YappyBots/YappyGitLab/commit/360d7b8))



