const Discord = require("discord.js");
const configFileName = process.env.NIRA_DEV ? 'config.dev.json' : 'config.json';
const { emojis } = require(`../../${configFileName}`);

global.contest1 = new Discord.MessageEmbed()
  .setTitle("ZUTOMAYO ZONE - Monthly Contest #3")
  .setDescription(`Sorry for the delay, everyone, but our 3rd competition is finally here! ${emojis.yay}\nThis time, instead of solely art entries, we're offering physical prizes this time around for a whole range of possible entry options. <:nirateehee:756734704161390734>\n||Please note this is probably a one-off for now as celebration of the release of 'Gusare', but we're planning more prizes for the future!\nIf you'd like to help out with contest prizes financially or otherwise, feel free to DM <@228880116699103232> or <@126355183608397825>, or donate **[here](https://ko-fi.com/uniguri)**!||`)
  .setColor(15849719)
  .addFields(
    {name: "What does ZUTOMAYO mean to you?", value: "You've probably already guessed the theme of this contest from the subheader above, and as such, our monthly contest has expanded from having a sole focus on art, to allowing a ton of potential options to its entrants.\nWhether you still want to focus on drawing, make a cover of a previous song, or write a whole thesis on ZUTOMAYO lore, the possibilities are ~~somewhat~~ endless!"}
);
global.contest2 = new Discord.MessageEmbed()
  .setColor(15849719)
  .addFields(
    {name: "How Do I Take Part?", value: "<#761326959154167838> been especially created to host server competitions!\nAfter you have verified that you have read the contest's rules below, ask any questions you may have, and ask for constructive criticism.\n\nHowever, **things will be a bit different for entries themselves this time around**.\nWhilst you can still post your entries in this aforementioned channel, you'll have to formally submit your entries on Google Forms.\nThis makes it much easier for me (<@228880116699103232>) to organise voting, and allow people to take part in all categories as many times as they'd like.\nFurther information can be found in the **__[Google Form](https://forms.gle/rLTpuoyrofgz1x6c8)__** itself."}
);
global.contest3 = new Discord.MessageEmbed()
  .setTitle("Rules and Regulations")
  .setDescription("By joining this contest, you hereby agree to have read the following rules and regulations;")
  .setColor(15849719)
  .addFields(
    {name: "Plaigarism", value: "Any form of plaigarism, such as direct tracing for art entries, or even submitting straight-up stolen work for any of the categories will result in immediate disqualification."},
    {name: "Restrictions", value: "We'd prefer original entries made solely for this contest, but there is no restriction on art previously created/entered into other competitions."}
);
global.contest4 = new Discord.MessageEmbed()
  .setColor(15849719)
  .addFields(
    {name: "When is the Deadline?", value: "The deadline for all entries will be on Saturday 20th February, 00:00 GMT/UTC.\nThe rest of the 20th, up until 00:00 on the 21st, will be dedicated to voting, where the top 3 entries in each category will be brought into a final vote to decide the final placement of entrants.\nWinners will be released by/on Monday the 22nd of February, with prizes hopefully shipping out/provided A.S.A.P. after. <:nirahappy:742102453901590529>"}
);
global.contest5 = new Discord.MessageEmbed()
  .setColor(15849719)
  .setDescription("Regardless of your place in the final 3 if you are a shortlisted runner-up in the art category, your art will still be featured as February-March's server banner!")
  .addFields(
    {name: "1st Place", value: `• Gusare standard edition CD.*\n• Gusare [limited edition case](https://www.instagram.com/p/CIVmZH9jG5q/), with a few extra goodies inside!*\n• 1,000,000${emojis.uniguri}.\n• A shiny new <@&761383548476325888> role.`},
    {name: "2nd Place", value: `• 3 months Spotify Premium.\n• 750,000${emojis.uniguri}.\n• The shiny <@&761383550741643284> role.`},
    {name: "3rd Place", value: `• 1 month Spotify Premium.\n• 250,000${emojis.uniguri}.\n• The shiny <@&761383550741643284> role.`},
    {name: "Participation Awards", value: `• 50,000${emojis.uniguri}.\n• The <@&770792091353743401> role!`}
);