class Snippet < ApplicationRecord
  has_and_belongs_to_many :tags
end
