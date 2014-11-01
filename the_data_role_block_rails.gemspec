# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'the_data_role_block_rails/version'

Gem::Specification.new do |spec|
  spec.name          = "the_data_role_block_rails"
  spec.version       = TheDataRoleBlockRails::VERSION
  spec.authors       = ["Ilya N. Zykin"]
  spec.email         = ["zykin-ilya@ya.ru"]
  spec.summary       = %q{Mix of `data-role`, `data-block` solutions from AI and kossnocorp}
  spec.description   = %q{Mix of `data-role`, `data-block` solutions from AI and kossnocorp for JQ, SLIM, HAML}
  spec.homepage      = "https://github.com/the-teacher/the_data_role_block_rails"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_dependency "rails"
  spec.add_development_dependency "bundler", "~> 1.7"
  spec.add_development_dependency "rake", "~> 10.0"
end
