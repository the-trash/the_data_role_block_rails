WARNING! DEPRECATED!

PLEASE, STUDY FOLLOWING SOLUTIONS: https://github.com/data-role-block


# TheDataRoleBlockRails

Mix of `data-role`, `data-block` solutions from:

1. https://github.com/ai/evil-blocks
2. https://github.com/kossnocorp/role

Gem provide

marker `@` for `data-role` and marker `@@` for `data-block` for `SLIM` and `HAML`

```slim
@hello-world
  | Hello World

@@some-block
  | WebBrick
```
and JQ methods for `data-role` and `data-block` items

```coffeescript
$ ->
  $('@hello-world').addRole 'sunshine'
  $('@hello-world').removeRole 'sunshine'
  $('@hello-world').toggleRole 'sunshine'

  $('@@some-block').addBlock 'stone'
  $('@@some-block').removeBlock 'stone'
  $('@@some-block').toggleBlock 'stone'
```

## DATA-ATTRIBUTES notice

I use

1. `data-block` aka `@@` for containers
2. `data-role` aka `@` for items with handlers or for items with values

for example

**SLIM**
```slim
button@btn-action

@@home
  | Hello World
  a#bird(href='#') Tweet
  a#cat(href='#') Meow 
  a#dog(href='#') Woof
```

**JS (CoffeeScript)**
```coffeescript
$ ->
  $('@btn-action').on 'click', (e) ->
    $('@@home a').addClass 'pet'
    false
    
  $('@@home a').on 'click', (e) ->
    link = $ e.target
    console.log link.text()
    false
```

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
//= require jquery.data-role-block
```

## MIT license
