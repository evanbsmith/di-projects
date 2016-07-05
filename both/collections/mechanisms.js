Mechanisms = new Mongo.Collection('mechanisms');

Mechanisms.helpers({

});

Mechanisms.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
