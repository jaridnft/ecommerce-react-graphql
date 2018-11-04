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
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // find item
    const item = await ctx.db.query.item({ where }, `{id title}`);
    // @TODO: check if they own item, or have permissions
    // delete item
    return ctx.db.mutation.deleteItem({ where }, info);
  }
};

module.exports = Mutations;
