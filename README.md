# TheDataRoleBlockRails

Mix of `data-role`, `data-block` solutions from:

1. https://github.com/ai/evil-blocks
2. https://github.com/kossnocorp/role

Gem provide

1. marker `@` for `data-role` and marker `@@` for `data-block` for `SLIM` and `HAML`
2. JQuery plugin with selectors `$('@role-name')` and `$('@@block-name')` and methods `addRole`, `removeRole`, `addBlock`, `removeBlock`

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'the_data_role_block_rails'
```

And then execute:

```
bundle
```

## Usage

app/assets/javascripts/application.js

```
//= require /jquery.data-role-block
```

## MIT license
