# react-hubspot-forms

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

# React-hubspot-forms 

react-hubspot-forms is a simple, functional way to incorporate Hubspot forms into React-based
application. 

If you have a Hubspot account and are trying to use their JS library, there's quite a lot of 
work to do to incorporate it, so we at Dwellsy bundled it into a reusable component to make
it more easy to add to pages, ergo more easy to leverage Hubspot's service. 

# Installation
`npm i -S react-hubspot-forms`

```
import { HubspotForm } from 'react-hubspot-form'

const Form = ({ portal, form }) => {
  <HubspotForm portalId={portalId} formId={form} />
}
```

## Demo

We're using it live in production. [Here](https://dwellsy.com/rental-property-managers) is a page
on Dwellsy.com where we are using it directly.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
