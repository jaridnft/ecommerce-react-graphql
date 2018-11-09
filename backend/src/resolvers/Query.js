const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    // check if there is a current userId
    if (!ctx.request.userId) return null;
    return ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId
        }
      },
      info
    );
  },
  users(parent, args, ctx, info) {
    // check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // check if user has the permissions to query all users
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);
    // if they do, query all the users
    return ctx.db.query.users({}, info);
  },
  async order(parent, args, ctx, info) {
    // make sure they are logged in
    if (!ctx.request.userId) {
      throw new Error("You aren't logged in!");
    }
    // query the current order
    const order = await ctx.db.query.order(
      {
        where: { id: args.id }
      },
      info
    );
    // check if they have the permissions to see this order
    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes(
      'ADMIN'
    );
    if (!ownsOrder || !hasPermissionToSeeOrder) {
      throw new Error("You can't see this!");
    }
    // return the order
    return order;
  },
  async orders(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('You must be logged in!');
    }
    const orders = await ctx.db.query.orders(
      {
        where: {
          user: { id: userId }
        }
      },
      info
    );
    return orders;
  }
};

module.exports = Query;
