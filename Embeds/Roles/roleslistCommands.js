module.exports = async (client, id = []) => {
    const channel = await client.channels.fetch(id)
  
    channel.messages.fetch().then((messages) => {
        const niraMessages = messages.filter(msg => msg.author == client.user);

        if (niraMessages.size === 0) {
            channel.send("**Roles List**")
            channel.send(roles1)
            channel.send("<:spacer:757807111756447806>")
            channel.send(roles2)
            channel.send("<:spacer:757807111756447806>")
            channel.send(roles3)
            channel.send("<:spacer:757807111756447806>")
            channel.send(roles4)
            channel.send("<:spacer:757807111756447806>")
            channel.send("**Role Shop**")
        }
        else {
            niraMessages.array()[7].edit(roles1);
            niraMessages.array()[5].edit(roles2);
            niraMessages.array()[3].edit(roles3);
            niraMessages.array()[1].edit(roles4);
        }
    })
}