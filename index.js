#!/usr/bin/env node
/**
 *
 * Author: Muhammad Saad
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const header = require("./utils/header.js");
const options = require("./utils/options.js");
const auth = require("./authentication.js");

const cli = async () => {
  header();
  try {
    await auth();
  } catch (err) {}
  options();
};

cli();
