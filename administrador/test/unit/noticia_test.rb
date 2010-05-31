require 'test_helper'

class NoticiaTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert Noticia.new.valid?
  end
end
