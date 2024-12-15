const { roles } = require('../data/roles');

const getRoles = (req, res) => {
  res.json(roles);
};

const getRoleById = (req, res) => {
  const role = roles.find(r => r.id === req.params.id);
  if (!role) {
    return res.status(404).json({ message: 'Role not found' });
  }
  res.json(role);
};

module.exports = {
  getRoles,
  getRoleById
};