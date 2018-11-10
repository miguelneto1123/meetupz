"use strict";

module.exports = function(User) {
  User.findRole = function(id, cb) {
    var app = User.app;

    var roleMappings = app.models.RoleMapping;
    var roles = app.models.role;

    roleMappings.findOne({ where: { principalId: id } }, (err, map) => {
      if (err) return cb(err);

      if (!map) return cb(null, "user", "-1");

      roles.findOne({ where: { id: map.roleId } }, (err, role) => {
        if (err) return cb(err);
        return cb(null, role.name, role.id);
      });
    });
  };

  User.remoteMethod("findRole", {
    http: {
      path: "/:id/role",
      verb: "get"
    },
    accepts: {
      arg: "id",
      type: "string",
      required: true
    },
    returns: [
      {
        arg: "rolename",
        type: "string"
      },
      {
        arg: "roleid",
        type: "string"
      }
    ]
  });

  const logout = User.logout;
  User.logout = function(accessTokenID, callback) {
    const app = User.app;
    const ats = app.models.AccessToken;
    ats.destroyAll(
      { where: { userId: this.id, id: { neq: accessTokenID } } },
      (err, info) => {
        if (err) callback(err);
      }
    );
    return logout.call(this, accessTokenID, callback);
  };
};
