import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import joi from 'joi';

import './main.html';

Template.main.onCreated(function mainOnCreated() {
  const credentials = {auth: {tokenHost: 'https://sub.example.com'}};
  const schema = joi
    .object()
    .keys({
      auth: joi
        .object()
        .keys({
          tokenHost: joi
            .string()
            .required()
            .uri({scheme: ['http','https']})}),
        });
  console.log(joi.attempt(credentials, schema, 'bad!'));
});

Template.main.helpers({
  status() {
    // return Template.instance().counter.get();
  },
});
