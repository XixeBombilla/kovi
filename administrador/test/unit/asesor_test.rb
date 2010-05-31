require 'test_helper'

class AsesorTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert Asesor.new.valid?
  end
end
