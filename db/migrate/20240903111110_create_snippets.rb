class CreateSnippets < ActiveRecord::Migration[7.1]
  def change
    create_table :snippets do |t|
      t.string :title
      t.string :code

      t.timestamps
    end
  end
end
