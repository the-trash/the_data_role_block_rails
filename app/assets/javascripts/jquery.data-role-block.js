!function($){
  // https://github.com/kossnocorp/role gem based on role param
  // https://github.com/ai/evil-blocks/ gem based on data-role and data-block param and created for slim
  // this gem based on data-role and has patch for slim and haml
  var rewriteSelector = function (context, name, pos) {
    var original = context[name];
    if ( !original ) return;

    context[name] = function () {
      arguments[pos] = arguments[pos].replace(
        /@@([\w\u00c0-\uFFFF\-]+)/g, '[data-block~="$1"]');
      arguments[pos] = arguments[pos].replace(
        /@([\w\u00c0-\uFFFF\-]+)/g,  '[data-role~="$1"]');
      return original.apply(context, arguments);
    };

    $.extend(context[name], original);
  };

  rewriteSelector($, 'find', 0);
  rewriteSelector($, 'multiFilter', 0);
  rewriteSelector($.find, 'matchesSelector', 1);
  rewriteSelector($.find, 'matches', 0);

  function parse(roleString, without){
    var role, result = [], roles = $.trim(roleString).split(/\s+/);

    for(var i=0; i<roles.length; i++) {
      role = roles[i];
      if (!~$.inArray(role, result) && (!without || !~$.inArray(role, without)))
        result.push(role);
    }

    return result;
  };

  $.extend($.fn, {
    // roles
    roles: function(){ return parse(this.attr('data-role')); },

    hasRole: function(roleName){
      var roles = parse(roleName);
      for(var i=0;i<roles.length;i++)
        if (!this.is('@'+roles[i])) return false;

      return true;
    },

    addRole: function(roleName){
      if (this.hasRole(roleName)) return this;

      return this.each(function(_, element){
        var $el = $(element);
        $el.attr('data-role', parse($el.attr('data-role') + ' ' + roleName).join(' '));
      });
    },

    removeRole: function(roleName){
      if (!this.hasRole(roleName)) return this;

      return this.each(function(_, element){
        var $el = $(element);
        $el.attr('data-role', parse($el.attr('data-role'), parse(roleName)).join(' '));
      });
    },

    toggleRole: function(roleName){
      var roles = parse(roleName);
      for(var i=0;i<roles.length;i++)
        this[this.hasRole(roles[i]) ? 'removeRole' : 'addRole'].call(this, roles[i]);
      return this;
    },

    // Blocks
    blocks: function(){ return parse(this.attr('data-block')); },

    hasBlock: function(blockName){
      var blocks = parse(blockName);
      for(var i=0;i<blocks.length;i++)
        if (!this.is('@@'+blocks[i])) return false;

      return true;
    },

    addBlock: function(blockName){
      if (this.hasBlock(blockName)) return this;

      return this.each(function(_, element){
        var $el = $(element);
        $el.attr('data-block', parse($el.attr('data-block') + ' ' + blockName).join(' '));
      });
    },

    removeBlock: function(blockName){
      if (!this.hasBlock(blockName)) return this;

      return this.each(function(_, element){
        var $el = $(element);
        $el.attr('data-block', parse($el.attr('data-block'), parse(blockName)).join(' '));
      });
    },

    toggleBlock: function(blockName){
      var blocks = parse(blockName);
      for(var i=0;i<blocks.length;i++)
        this[this.hasBlock(blocks[i]) ? 'removeBlock' : 'addBlock'].call(this, blocks[i]);
      return this;
    }
  });
}(jQuery)
