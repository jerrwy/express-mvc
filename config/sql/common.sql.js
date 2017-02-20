exports.clear = `
SET foreign_key_checks = 0;
DELETE FROM user;
SET foreign_key_checks = 1
`