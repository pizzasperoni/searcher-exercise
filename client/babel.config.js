const pluginProposalObject = require('@babel/plugin-proposal-object-rest-spread');
const pluginProposalClassProps = require('@babel/plugin-proposal-class-properties');

module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react'],
  plugins: [pluginProposalObject, pluginProposalClassProps],
};
