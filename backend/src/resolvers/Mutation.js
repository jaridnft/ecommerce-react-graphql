const Mutations = {
  async createItem(parent, args, ctx, info) {
    // @TODO: check if they are logged in

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  },
  updateItem(parent, args, ctx, info) {
    // first take a copy of the update
    const update = { ...args };
    // remove the ID from updates
    delete update.id;
    // run the update method
    return ctx.db.mutation.updateItem(
      {
        data: update,
        where: {
          id: args.id
        }
      },
      info
    );
  }
};

module.exports = Mutations;
