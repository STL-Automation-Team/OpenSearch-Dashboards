export const navigator = {
  name: 'navigator',
  aliases: [],
  type: 'string',
  help: 'Get a browser property of some sort',
  context: {},
  args: {
    _: {
      types: [
        'string',
      ],
      'aliases': [],
      'multi': false,
    },
  },
  fn: (context, args) => {
    return navigator[args._];
  },
};
