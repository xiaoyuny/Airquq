# == Schema Information
#
# Table name: listings
#
#  id               :bigint(8)        not null, primary key
#  name             :string           not null
#  host_id          :integer          not null
#  description      :text             not null
#  price            :float            not null
#  room_num         :integer          not null
#  bed_num          :integer          not null
#  bath_num         :integer          not null
#  air_conditioning :boolean          not null
#  heating          :boolean          not null
#  essentials       :boolean          not null
#  wifi             :boolean          not null
#  tv               :boolean          not null
#  washer           :boolean          not null
#  kitchen          :boolean          not null
#  free_parking     :boolean          not null
#  hair_dryer       :boolean          not null
#  shampoo          :boolean          not null
#  address          :string           not null
#  city             :string           not null
#  state            :string           not null
#  country          :string           not null
#  zipcode          :string
#  lat              :float            not null
#  lng              :float            not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
