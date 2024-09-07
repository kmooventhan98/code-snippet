class Snippet < ApplicationRecord
  has_and_belongs_to_many :tags

  before_save :associate_tags

  def associate_tags
    tag_names = self.tag_ids.reject(&:blank?)
    new_tags = tag_names.map do |name|
      Tag.find_or_create_by(name: name)
    end
    self.tags = new_tags
  end
end
